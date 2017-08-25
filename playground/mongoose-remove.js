const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('59a06cc175be8ce8054c170e').then((todo) => {
  console.log(todo);
});

Todo.findOneAndRemove({_id: '59a06cc175be8ce8054c170e'}).then((todo) => {
  console.log(todo);
});
