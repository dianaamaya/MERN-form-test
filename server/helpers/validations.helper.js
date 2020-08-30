const formValidations = {};
const joi = require('@hapi/joi');

/**
 * predefined  form scheme 
 */
formValidations.schemaForm = joi.object().keys({

    firstname: joi.string()
        .required(),
    
    lastname: joi.string()
        .required(),    
    
    email: joi.string().email()
        .required(),
    
    eventdate: joi.date().min('now')
    
});



/**
 * validates the parameters sent by the user 
 * 
 * @param {Object} schema - defined validation (schemaForm)
 *                         
 */
formValidations.validateBody  = (schema) => {

    return (req, res, next) => {

       //check parameters in req.body
       const result = schema.validate(req.body);

       //console.log(result.error);
       //check if there are arrors
       //console.log(result.error.details[0].message);
       if(result.error){           
        return res.status(400).json({error:result.error.details[0].message});
       }    

       //clean and set the value in the object
       if(!req.value){ req.value = {}; }
       req.value['body'] = result.value;

       //continue
       next();
    }  
      
}

//export route helpers
module.exports = formValidations;