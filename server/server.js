const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

app.use(express.json());

app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });
  todo.save().then(
    doc => {
      res.send(doc);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
