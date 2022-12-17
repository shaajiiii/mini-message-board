const Joi = require('joi');
const {User} = require('../model/user');
const bcrypt = require('bcrypt');


//VALIDATION OF SIGN UP DATA =====//

const validateData = (signupData) => {
    const schema = Joi.object({
        username: Joi.string().regex(/^[A-Za-z0-9]+$/).min(2).required().label("Username").messages({
            "string.pattern.base": "only letters and numbers allowed in username.."
        }),
        password: Joi.string().min(4).required().label("Password"),
    })

    return schema.validate(signupData)

}

module.exports = {
    userSignUpPost: async(req,res)=>{
        let {error} = validateData(req.body)
        if (error)
            return res.status(400).send({ message: error.details[0].message });
    
        let user = await User.findOne({ username: req.body.username });
        if (user)
            return res.status(409).send({ message: "Username already taken!" });
    
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashPassword
    
        await new User(req.body).save();
        res.status(201).send("User Created Successfully")

    }
}