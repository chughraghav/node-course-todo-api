// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

const url = "mongodb://localhost:27017";
const dbName = "todoApp";
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  const db = client.db(dbName);

  if(err){
    return console.log(`Unable to connect to Mongodb server`);
  }
  console.log(`Connected to MongoDB server`);

  // db.collection('todos').insertOne({
  //   text : 'Something to do',
  //   completed : false
  // },(err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

// insert new doc into user collection.
// fields : name , age , location
  // db.collection('users').insertOne({
  //   name : 'Andrew',
  //   age : 25,
  //   location : 'Udemy'
  // },(err, result) => {
  //   if(err){
  //     return console.log('Unable to insert user',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  //   // console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});
