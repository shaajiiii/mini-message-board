const Joi = require('joi');
const {User} = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const validateLoginData = (signupData) => {
    const schema = Joi.object({
        username: Joi.string().regex(/^[A-Za-z0-9]+$/).min(2).required().label("Username").messages({
            "string.pattern.base": "check your username"
        }),
        password: Joi.string().required().label("Password"),
    })

    return schema.validate(signupData)

}


module.exports = {
    userLoginPost: async (req,res)=>{
 
        let { error } = validateLoginData(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ username: req.body.username });
        if (!user)
            return res.status(401).send({ message: "Invalid username or Password" });

        const validPassword = await bcrypt.compare(req.body.password,user.password);
        if (!validPassword)
            return res.status(401).send({ message: "Invalid Email or Password" });

        // authentication over

        const token = generateAuthToken(user._id);
		res.status(200).send({ token: token, message: "logged in successfully" });

    }
}



//the user id is passed and encoded to token
const generateAuthToken = (userId)=>{
    const token = jwt.sign({ _id: userId }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;

}
