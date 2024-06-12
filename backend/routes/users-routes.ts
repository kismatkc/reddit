const express = require("express");
const { createUser } = require("../controllers/users-controllers");

const router = express.router;

//Routes for users
router.post("/createUser", createUser);

module.exports = router;
