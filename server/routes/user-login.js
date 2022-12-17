const router = require("express").Router();
const userLogin = require('../controller/user-login')



router.post('/', userLogin.userLoginPost);


module.exports = router;