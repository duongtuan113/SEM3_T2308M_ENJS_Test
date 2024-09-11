const mongoose = require("mongoose");

const userChema = new mongoose.Schema({
  username: {
    type: String,
    require,
  },
  age: {
    type: Number,
    min: 0,
  },
});
const User = mongoose.model("user", userChema);
module.exports = User;
