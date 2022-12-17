import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const navigateTo = useNavigate();  
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  let handleSignUp = async (e) => {
    e.preventDefault()
    let signUpData = {
        username : username,
        password:password
    }

    try {
        let resp = await axios.post("http://localhost:7000/signup",signUpData);
        if(resp.status === 201){
            setError('');setUsername('');setPassword('');
            navigateTo('/login')

        }
        
    } catch (error) {
        if(error.response.status===400){
            setError(error.response.data.message)
        }else if(error.response.status===409){
            setError(error.response.data.message)
        }
        else{
            console.log(error);
        }

    }
  }

  return (
      <>

          <div className="col-12">
              <div className='login_form_container'>
                  <div className='form-box'>

                      <form className='form_container' onSubmit={handleSignUp}>
                          <span className='mb-3' style={{ color: "White" }}>
                              <Link to='/login' className='login_label' style={{ textDecoration: "none",color :"#8a8a8a" }} >
                                  <span > Login</span>
                              </Link>
                              <span style={{ paddingLeft: "1rem", paddingRight: "1rem" }}> | </span>
                              <Link to='/signup' style={{ textDecoration: "none", color: "white" }}>
                                  <span > Signup</span>
                              </Link>
                          </span>


                          <input
                              type="text"
                              placeholder="Username"
                              name="username"
                              required
                              className='input'
                              onChange={(e) => { setUsername(e.target.value); setError("") }}
                              value={username}
                          />
                          <input
                              type="password"
                              placeholder="Password"
                              name="password"
                              required
                              className='input'
                              onChange={(e) => { setPassword(e.target.value); setError("") }}
                              value={password}
                          />

                          {error && <div className='error_msg'>{error}</div>}

                          <button type="submit" className='blue_btn'>
                              Sign Up 
                          </button>

                      </form>
                  </div>

              </div>

          </div>



      </>
  )
}

export default Signup
