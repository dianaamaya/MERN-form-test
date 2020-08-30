/**
 * User schema
 */
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstname: { 
        type: String,
        require:true,
        trim: true
    },
    lastname: { 
        type: String,
        require:true,
        trim: true, 
    },
    email: { 
        type: String,
        require:true,
        trim: true, 
        lowercase:true
    },
    eventdate: {
        type: Date,
        require:true
    }

},
{
    timestamps: true
});

module.exports = model('UserModel', userSchema);