const express = require("express")
const router = express.Router();
const jwt = require('jsonwebtoken');
const homeController = require('../controller/home-controller');


router.get('/get-data',authenticateToken,homeController.getData)
router.put('/add-post',authenticateToken,homeController.addPost)

function authenticateToken(req, res, next) {
   
    const token = req.headers['authorization']
    if (!token) return res.sendStatus(401)
    jwt.verify(token, process.env.JWTPRIVATEKEY, (err, data) => {
            if (err) return res.sendStatus(403)
            req.tokenData = data
            next()
    })
}


module.exports = router;