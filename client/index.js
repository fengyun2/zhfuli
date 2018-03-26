const zhihu = require('../spider');

const { User } = zhihu;
const username = 'excited-vczh';

// User.info(username).then(user => {
//   console.log(user);
// });

const hash_id = '0970f947b898ecc0ec035f9126dd4e08';
User.followers(hash_id).then(users => {
  // console.log('users: ', users);
});

// const { Question } = zhihu;
// Question.answers("22212644").then(result => {
//   console.log(result);
// });
