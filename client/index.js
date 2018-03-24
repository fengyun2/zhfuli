const zhihu = require("../spider");

const { User } = zhihu;
const username = "excited-vczh";

User.info(username).then(user => {
  console.log(user);
});

// const { Question } = zhihu;
// Question.answers("22212644").then(result => {
//   console.log(result);
// });
