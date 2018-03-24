// 获取用户信息
const fs = require("fs");
const { request, cheerio } = require("../config/commonModules");

const config = require("../config");
const API = require("../config/api");

function formatFollowData(str) {
  if (str.indexOf("K") !== -1) {
    return parseInt(str) * 1000;
  }
  return parseInt(str);
}

const info = name => {
  const opt = {
    url: API.user.info,
    qs: {
      params: JSON.stringify({
        url_token: name
      })
    }
  };

  return request(opt).then(content => {
    const responseBody = content.body;
    const $ = cheerio.load(responseBody);
    const values = $("span.value");
    // console.log("responseBody", responseBody);

    fs.writeFile(
      "./userInfo.html",
      responseBody,
      {
        encoding: "utf8",
        flag: "a"
      },
      err => {
        if (err) {
          console.log("save userInfo error");
        } else {
          console.log("save userInfo Success");
        }
      }
    );

    const result = {
      answer: formatFollowData(values.eq(0).text()),
      post: formatFollowData(values.eq(1).text()),
      follower: formatFollowData(values.eq(2).text())
    };

    result.profileUrl = config.zhihu + $("a.avatar-link").attr("href");
    result.name = $("span.name").text();
    const male = $(".icon-profile-female");
    result.sex = male.length === 1 ? "female" : "male";

    return result;
  });
};

module.exports = {
  info
};
