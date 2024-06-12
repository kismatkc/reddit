import 
const { createUser } = require("../controllers/users-controllers");


//Routes for users
router.post("/createUser", createUser);