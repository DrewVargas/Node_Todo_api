const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos')
    //   .deleteMany({ text: 'eat dinner' })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection('Todos')
    //   .deleteOne({ text: 'eat dinner' })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection('Todos')
    //   .findOneAndDelete({ completed: false })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection('Users').deleteMany({ name: 'Andrew' });

    // db.collection('Users')
    //   .findOneAndDelete({ _id: new ObjectID('5baedc9344ae8a0734294450') })
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection('Users')
      .find()
      .toArray()
      .then(result => {
        console.log(JSON.stringify(result, null, 2));
      });

    // client.close();
  }
);
