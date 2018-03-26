// spider/config/api.js

const zhihu = 'https://www.zhihu.com';
const zhuanlan = 'https://zhuanlan.zhihu.com';

module.exports = {
  zhihu: zhihu,
  zhuanlan: zhuanlan,
  topic_url: zhihu + '/topic/',
  post: {
    info: zhuanlan + '/api/posts/<%= postID%>',
    likers: zhuanlan + '/api/posts/<%=postID%>/likers',
    page: zhuanlan + '/api/columns/<%=name %>/posts',
    zhuanlan: zhuanlan + '/api/columns/',
    comments: zhuanlan + '/api/posts/<%=postID%>/comments'
  },
  answer: {
    likers: zhihu + '/node/AnswerFullVoteInfoV2',
    voters: zhihu + '/answer/<%= answerId %>/voters_profile'
  },
  user: {
    info: zhihu + '/node/MemberProfileCardV2', // 获取用户信息
    followers: zhihu + '/node/ProfileFollowersListV2', // 获取目标用户的关注者
    followees: zhihu + '/node/ProfileFolloweesListV2' // 获取目标用户关注的人
  },
  collection: {
    // full url: http://www.zhihu.com/collection/25547043?page=1
    url: zhihu + '/collection/'
  }
};
