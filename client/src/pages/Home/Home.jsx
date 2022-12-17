import React,{useEffect,useState} from 'react';
import Nav from '../../components/Nav/Nav';
import InputBox from '../../components/InputBox/InputBox';
import PostBox from '../../components/PostBox/PostBox';
import './Home.css';


function Home() {
  const [loggedInUserName, setLoggeedInUserName] = useState("test Name")

  let checktoken = () => {
    const token = localStorage.getItem('token')
    if (!token) {
      window.location = '/login';
    }

  }


  useEffect(() => {
    checktoken();
  }, []);



  return (
    <>
      <div className="home">
        <Nav username={loggedInUserName} />
        <div className="content col-12 row d-flex justify-content-center">
          <div className="col-12 col-md-6" style={{ padding: "2rem" }}>
            
            <InputBox />
            <PostBox />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
