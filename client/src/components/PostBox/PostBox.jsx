import axios from 'axios';
import React from 'react';
import './PostBox.css';


function PostBox({ Posts , username , getPostData  }) {
    const token = localStorage.getItem('token')

    const deletepost = async (postId)=>{
        
        try{
            let resp = await axios.delete(`http://localhost:7000/home/delete-post/${postId}`, { headers: {"Authorization" : token} });
            if(resp.status==200){
                console.log(resp.data.message);
                getPostData();
            } else{
                console.log(resp);
            }
        }
        catch (err){
            console.log(err);

        }
    }

 

    return (
        <div className='posts-container'>

            {Posts &&
                Posts.map((post) => {
                    return (
                        <div className="post">
                            <div className="post-head">
                                <span className='post-title'>{post.title}</span>
                                <span className='post-author-name'> {post.author.name} </span>
                            </div>
                            <div className="post-message">
                                <p>{post.message}</p>
                                <div>
                                    <span style={{ color: "#a5c4d9" }}> {(new Date(post.date)).toISOString().slice(0, 10)}</span>
                                    {
                                        username == post.author.name && 
                                        <img className='delete-icon' onClick={()=>{deletepost(post._id)}}
                                        src="/delete-icon.png" alt="delete icon" title='click to delete message' />
                                    }
                                    
                                </div>

                            </div>
                        </div>

                    )
                })
            }




        </div>
    )
}

export default PostBox
