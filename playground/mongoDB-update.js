// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
  return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("599727329c6f4b19003562ca")
  }, {
    $set: {
      name: 'Cullen'
    },
    $inc: {
      age: 1
    }
  }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

  // db.close();
});
