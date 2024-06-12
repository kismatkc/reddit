const express = require("express");

const createUser = require("../controllers/usersControllers");

const router = express.Router();

//Routes for users
router.post("/createUser", createUser);

module.exports = router;
