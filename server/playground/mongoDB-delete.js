// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
  return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // delete many
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // delete one
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //Find one and delete
  // db.collection('Users').findOneAndDelete({"_id": new ObjectID("5997274e1e6e5b259c50222f")}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteOne({name: 'Cullen'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({name: 'Cullen'}).then((result) => {
    console.log(result);
  });


  // db.close();
});
