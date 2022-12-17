const {User} = require('../model/user');
const {Post} =require('../model/post');





module.exports = {
    getData: async(req,res)=>{
      //req.tokenData has data in token
      let allPosts = await Post.find();
      let user = await User.findOne({_id:req.tokenData._id},{username:1})
      let respData = {
        allPosts: allPosts,
        username:user.username
      }
      res.status(200).send(respData)
      
    }
}


