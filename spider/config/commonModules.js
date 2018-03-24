// 统一模块管理
const url = require("url");
const { promisify } = require("util");
const cheerio = require("cheerio");
const request = promisify(require("request"));
const _ = require("lodash");
const QUERY = require("./query");

module.exports = {
  url,
  cheerio,
  Promise,
  request,
  _,
  QUERY
};
