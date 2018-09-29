const mongoose = require('mongoose');

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    minlength: 10,
    trim: true,
    default: 'Person@humanbeing.com'
  }
});

module.exports = { User };
