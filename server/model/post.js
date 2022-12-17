const mongoose = require('mongoose');
let ObjectId =mongoose.Schema.Types.ObjectId;
const postSchema = new mongoose.Schema({
    title:String,
    message:String,
    date:{
        type:Date,
        default: ()=>Date.now()
    },
    author:{
        userId:ObjectId,
        name:String
    }
})

const Post = mongoose.model('posts',postSchema);

module.exports = {Post}