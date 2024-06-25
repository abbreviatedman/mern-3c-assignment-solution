const User = require("./usersModel.js");

async function createUser(req, res) {
  try {
    await User.create(req.body);
    const user = await User.find({ username: req.body.username });
    res.status(201).json({ message: "success", payload: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mesage: "failure in create user", payload: error });
  }
}

module.exports = { createUser };
