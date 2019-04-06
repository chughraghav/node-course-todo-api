const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({})

// Todo.remove({}).then(res => {
//   console.log(res);
// });


//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findOneAndRemove({
  _id : '5ca88a7567bdfd4ff2e94302'
}).then((todo) => {
  console.log(todo);
})

Todo.findByIdAndRemove('5ca88a7567bdfd4ff2e94302').then((todo) => {
  console.log(todo);
});
