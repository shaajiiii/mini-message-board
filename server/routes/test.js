const express = require("express")
const router = express.Router();
const {Post} =require('../model/post') 

router.get('/', async(req,res)=>{
    let testPost = {
        title:"dummy title",
        message :" dyacygn",
        author:{
            name:"manu"
        }
    }

    await new Post(testPost).save()
    console.log("test route get fired");
    res.send("ok working")
})

module.exports = router;