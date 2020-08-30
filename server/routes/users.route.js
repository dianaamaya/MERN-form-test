const router = require("express").Router();

//Helpers
const { validateBody, schemaForm } = require('../helpers/validations.helper');

//Controllers
const { registerUser, getUsers } = require("../controllers/users.controller");

//User routes

/**
 * get all registers
 */
router.get("/",  
    getUsers);

/**
 * create a new register
 * - first check the form parameters
 * - if everything is ok, call the controller
 */
router.post("/", 
    validateBody(schemaForm), 
    registerUser);


//export the mudule
module.exports = router;