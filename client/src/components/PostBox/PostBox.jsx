import axios from 'axios';
import React from 'react';
import './PostBox.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



function PostBox({ Posts, username, getPostData }) {
    const token = localStorage.getItem('token')

    const MySwal = withReactContent(Swal)

    const deletePrompt = (postId) => {
        MySwal.fire({
            title: 'Delete the message?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc3545',
            cancelButtonColor: '#398ab9',
            confirmButtonText: 'Delete!'
        }).then((result) => {
            if (result.isConfirmed) {
                deletepost(postId)
            }
        })
    }


    const deletepost = async (postId) => {

        try {
            let resp = await axios.delete(`http://localhost:7000/home/delete-post/${postId}`, { headers: { "Authorization": token } });
            if (resp.status == 200) {
                console.log(resp.data.message);
                MySwal.fire({
                    title: 'Deleted',
                    icon: 'success',
                    confirmButtonColor: '#1c668d',
                }

                )
                getPostData();
            } else {
                console.log(resp);
            }
        }
        catch (err) {
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
                                        <img className='delete-icon' onClick={() => { deletePrompt(post._id) }}
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
