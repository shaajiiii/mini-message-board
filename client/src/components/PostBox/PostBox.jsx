import React from 'react';
import './PostBox.css'

function PostBox() {
    return (
        <div className='posts-container'>

            <div className="post">
                <div className="post-head">
                    <span className='post-title'> My Title , Yay! </span>
                    <span className='post-author-name'> username </span>
                </div>
                <div className="post-message">
                    <p>This is my awesome message!!!!</p>
                    <h6 style={{color:"#a5c4d9"}}> 2004-6-3</h6>
                </div>
            </div>

            <div className="post">
                <div className="post-head">
                    <span className='post-title'> My Title , Yay! </span>
                    <span className='post-author-name'> username </span>
                </div>
                <div className="post-message">
                    <p>This is my awesome message!!!!</p>
                    <h6 style={{color:"#a5c4d9"}}> 2004-6-3</h6>
                </div>
            </div>

            <div className="post">
                <div className="post-head">
                    <span className='post-title'> My Title , Yay! </span>
                    <span className='post-author-name'> username </span>
                </div>
                <div className="post-message">
                    <p>This is my awesome message!!!!</p>
                    <h6 style={{color:"#a5c4d9"}}> 2004-6-3</h6>
                </div>
            </div>
        

        </div>
    )
}

export default PostBox
