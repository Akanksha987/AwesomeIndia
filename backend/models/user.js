const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'name is required'],
        maxlength: 32,
    },
    email: {
      type: String,
      trim: true,
      required: [true, 'e-mail is required'],
      unique: true,
      match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          'Please add a valid email'
      ]
  },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6,
        select: false 
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;