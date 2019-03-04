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

  // deleteMany todos
  // db.collection('todos').deleteMany({text : 'Eat lunch'}).then((result)=> {
  //   console.log(result);
  // });

  //deleteOne todos
  // db.collection('todos').deleteOne({text : 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // //findOneAndDelete Todos
  // db.collection('todos').findOneAndDelete({completed : false}).then((result) => {
  //   console.log(result);
  // });

  //deleteMany Users
  // db.collection('users').deleteMany({name : 'Andrew'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete Users
  db.collection('users').findOneAndDelete({_id : new ObjectID('5c7cf951fefed462a83a4bec')}).then((result) => {
    console.log(result);
  });

  // client.close();
});
