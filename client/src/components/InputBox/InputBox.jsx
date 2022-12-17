import axios from 'axios';
import React,{useState} from 'react';
import './InputBox.css';


function InputBox({getPostData}) {

    const [title,setTitle] = useState();
    const [message,setMessage] = useState();
    const token = localStorage.getItem('token')

    const addPost =async (e)=>{
        e.preventDefault()
        let postData = {
            title:title,
            message:message
        }
        try{
            let resp = await axios.put("http://localhost:7000/home/add-post",postData, { headers: {"Authorization" : token} });
            if(resp.status==201){
                setTitle('');
                setMessage('');
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
        <div>

            <div className="input-form-contianer">
                <form onSubmit={addPost}>
                    <div class="form-group">
                    
                        <input type="text"
                         class="form-control 
                         input-title-box" 
                         id="exampleFormControlInput1" 
                         onChange={(e)=>{setTitle(e.target.value)}}
                         value={title}
                         required
                         placeholder="Title" />
                    </div>

                    <div class="form-group">

                        <textarea className="form-control input-msg-box" id="exampleFormControlTextarea1" rows="3" 
                        onChange={(e)=>{setMessage(e.target.value)}}
                        required
                        value={message}
                        placeholder='Message'>

                        </textarea>
                    </div>

                    <button type="submit" className='submit-button' >Submit</button>
                </form>
            </div>

        </div>
    )
}

export default InputBox
