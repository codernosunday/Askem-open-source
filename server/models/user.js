const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const randomNumber = Math.floor(Math.random() * 100) + 1;
const userModel = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'user' },
  profilePhoto: {
    type: String,
    default: function () {
      return `https://avatar.iran.liara.run/public/${randomNumber}`;
    }
  },
  created: { type: Date, default: Date.now }
});

userModel.set('toJSON', { getters: true });
userModel.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj._id;
  delete obj.__v;
  delete obj.password;
  return obj;
};

module.exports = mongoose.model('user', userModel);
