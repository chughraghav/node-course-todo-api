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

  // db.collection('todos').find({_id : new ObjectID('5c7141b18bdd4d3a800b7e8d')}).toArray().then((docs)=> {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err)=> {
  //   console.log('Unable to fetch todos',err);
  //

  // db.collection('todos').find().count().then((count)=> {
  //   console.log(`Todos  count: ${count} `);
  // }, (err)=> {
  //   console.log('Unable to fetch todos',err);
  // });

  db.collection('users').find({name : 'Andrew'}).toArray().then((docs)=> {
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));
  }, (err)=> {
    console.log('Unable to fetch Users');
  });

  // client.close();
});
