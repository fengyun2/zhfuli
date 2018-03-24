//全部接口的默认query集中管理，便于后期维护

let query = {
  zhuanlan: {
    comments: {
      limit: 10,
      offset: 0
    },
    likers: {
      limit: 10,
      offset: 0
    },
    articleList: {
      limit: 10,
      offset: 0
    }
  }
};

module.exports = query;
