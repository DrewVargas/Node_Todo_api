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
    //   .findOneAndUpdate(
    //     {
    //       _id: new ObjectID('5baed9be44ae8a073429444f')
    //     },
    //     { $set: { completed: true } },
    //     { returnOriginal: false }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection('Users')
      .findOneAndUpdate(
        { _id: new ObjectID('5baedc9344ae8a0734294451') },
        { $set: { name: 'Billy' }, $inc: { age: 1 } },
        { returnOriginal: false }
      )
      .then(result => {
        console.log(JSON.stringify(result, null, 2));
      });

    // client.close();
  }
);
