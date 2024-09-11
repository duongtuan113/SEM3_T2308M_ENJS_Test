const User = require("../models/Users");

// Hiển thị danh sách người dùng
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.render("users/index", { users: users });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Hiển thị form tạo người dùng mới
exports.getCreateUserForm = (req, res) => {
  res.render("users/create");
};

// Xử lý tạo người dùng mới
exports.createUser = async (req, res) => {
  const { name, age } = req.body;
  try {
    const newUser = new User({ name, age });
    await newUser.save();
    res.redirect("/users");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Hiển thị form sửa người dùng
exports.getEditUserForm = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render("users/edit", { user });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Xử lý sửa người dùng
exports.updateUser = async (req, res) => {
  const { name, age } = req.body;
  try {
    await User.findByIdAndUpdate(req.params.id, { name, age });
    res.redirect("/users");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Xử lý xóa người dùng
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect("/users");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
