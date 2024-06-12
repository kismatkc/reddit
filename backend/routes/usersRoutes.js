const express = require("express");

const { createUser } = require("../controllers/usersControllers");

const router = express.router;

//Routes for users
router.post("/createUser", createUser);

module.exports = router;
