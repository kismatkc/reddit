const express = require("express");
const { createUser } = require("../controllers/users-controllers");

//Routes for users
router.post("/createUser", createUser);
