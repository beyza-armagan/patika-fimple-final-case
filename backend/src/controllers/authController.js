import Boom from "boom";
import { signAccessToken, signRefreshToken } from "../helpers/jwt.js";
import { User } from "../models/userSchema.js";

export const login_get = (req, res) => {
  res.render("/admin/basvuru-listesi");
};

export const login_post = async (req, res, next) => {
  console.log("login");

  const { username, password } = req.body;
  console.log(username, password);
  try {
    const user = await User.findOne({ username: username });

    console.log("user pass", user.password);
    if (!user) {
      throw Boom.notFound("The email address was not found.");
    }

    const isMatched = user.password === password;
    if (!isMatched) {
      throw Boom.unauthorized("email or password not correct");
    }

    const accessToken = await signAccessToken({
      user_id: user._id,
      role: user.role,
    });
    const refreshToken = await signRefreshToken(user._id);

    const userData = user.toObject();
    delete userData.password;
    delete userData.__v;

    res.json({ user: userData, accessToken, refreshToken });
  } catch (e) {
    return next(e);
  }
};
export const logout_get = (req, res) => {};
