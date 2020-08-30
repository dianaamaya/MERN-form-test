const usersCtrl = {};

// models
const UserModel = require('../models/User');

/**
 * get all users 
 * 
 * @return {Object} users - all registers in database
 */
usersCtrl.getUsers = async (req, res) => {
    try{
        const users = await UserModel.find();
       // console.log(users);
        res.status(200).json(users);        
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({error: "server error"});
    }
}


/**
 * create a new register 
 * 
 * @param {String} firstname - firstname to be saved
 * @param {String} lastname - lastname to be saved
 * @param {String} email - email to be saved
 * @param {Date} eventdate - date to be saved
 * @return {Object} message - inform data was registered
 */
usersCtrl.registerUser = async (req, res) => {
    try{
        const { firstname, lastname, email, eventdate } = req.body;
   
        //look for that email in the dabase
        const isRegistered = await UserModel.find({email: email});   
        
        const currentdate = new Date(eventdate).getTime();
        let eventexist = false;
       
        //check if the email already has the evendate (the same)
        for(const [key, value] of Object.entries(isRegistered)){   
            if(value.eventdate.getTime() === currentdate){
                eventexist = true;
                break;
            }
        }
        
        if(eventexist){
            res.status(403).json({error: "user is already registered in this event date"});
        }
        else {
            const newUser = new UserModel({ firstname, lastname, email, eventdate });
            await newUser.save();

            res.status(200).json({success: true});
        }
        
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({error: "server error"});
    }
}


module.exports = usersCtrl;