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

  //findOneAndUpdate todos
  // db.collection('todos').findOneAndUpdate({
  //   _id : new ObjectID('5c7cf70efefed462a83a4b15')
  // },{
  //   $set : {
  //     completed : true
  //   }
  // },{
  //     returnOriginal : false
  //   }).then((result) => {
  //   console.log(result);
  // });

  //findOneAndUpdate users
  db.collection('users').findOneAndUpdate({
    _id : new ObjectID('5c71427ab3ef2d30ec53431d')
  }, {
    $set : {
      name : 'R'
    },
    $inc : {
      age : 1
    }
  }, {
    returnOriginal : false
  }).then((result) => {
    console.log(result);
  });

  // client.close();
});
