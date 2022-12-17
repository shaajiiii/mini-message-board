import React from 'react';
import './PostBox.css'

function PostBox({ Posts }) {
   
    
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
                                <h6 style={{ color: "#a5c4d9" }}> {(new Date(post.date)).toISOString().slice(0, 10)}</h6>
                            </div>
                        </div>

                    )
                })
            }




        </div>
    )
}

export default PostBox
