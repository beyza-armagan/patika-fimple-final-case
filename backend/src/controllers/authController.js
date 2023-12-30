const User = require("../models/userSchema");

const login_get = (req, res) => {
  res.render("/admin/basvuru-listesi");
};

const login_post = (req, res) => {};
const logout_get = (req, res) => {};

module.exports = {
  login_get,
  login_post,
  logout_get,
};
