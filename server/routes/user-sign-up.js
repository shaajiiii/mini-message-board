const router = require("express").Router();
const userSignup = require('../controller/user-sign-up')



router.post('/', userSignup.userSignUpPost);


module.exports = router;