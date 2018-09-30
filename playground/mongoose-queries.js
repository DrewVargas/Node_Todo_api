const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '5bb00e3661e33acc14185b8711';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
//   })
//   .catch(err => console.log(err));

const userId = '5baef9b7618c14cc61dfa8c1';

User.findById(userId)
  .then(user => {
    if (!user) {
      return console.log('Id of user not found');
    }
    console.log('User by Id', user);
  })
  .catch(err => console.log(err));
