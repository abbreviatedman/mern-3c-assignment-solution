const express = require("express");

const { createUser } = require("./usersController");

const router = express.Router();

router.post("/create-user", createUser);

module.exports = router;
