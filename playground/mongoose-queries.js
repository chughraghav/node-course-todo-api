const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5c7d4159d44f671588e4ef69';
// var id = '5c979c440b3f22155494e2f81';
//
// if(!ObjectID.isValid(id)){
//    console.log('ID not valid');
// }


// Todo.find({
//   _id : id
// }).then((todos) => {
//   if(!todo){
//     console.log('No todos found');
//   }
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id : id
// }).then((todo) => {
//   if(!todo){
//     console.log('Todo not found');
//   }
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id',todo);
// }).catch( err => {
//   console.log(err);
// });

User.findById(id).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log(JSON.stringify(user,undefined,2));
}).catch((e) => console.log(e));
