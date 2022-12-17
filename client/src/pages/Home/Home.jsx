import React,{useEffect,useState} from 'react';
import Nav from '../../components/Nav/Nav';
import InputBox from '../../components/InputBox/InputBox';
import PostBox from '../../components/PostBox/PostBox';
import './Home.css';
import axios from 'axios';


function Home() {

  const token = localStorage.getItem('token')
  const [loggedInUserName, setLoggeedInUserName] = useState("test Name")
  const [posts,setPosts] = useState([]);

  

  let checktoken = () => {
    
    if (!token) {
      window.location = '/login';
      return;
    }

  }

  let getPostsData = async ()=>{
    try{
      let resp = await axios.get("http://localhost:7000/home/get-data", 
      { headers: {"Authorization" : token} });
     
      setPosts(resp.data.allPosts);
      setLoggeedInUserName(resp.data.username)
    }
    catch (err){
        console.log(err);

    }

  }

  useEffect(() => {
    checktoken();
    getPostsData()
  }, []);



  return (
    <>
      <div className="home">
        <Nav username={loggedInUserName} />
        <div className="content col-12 row d-flex justify-content-center">
          <div className="col-12 col-md-6" style={{ padding: "2rem" }}>
            
            <InputBox getPostData={getPostsData}  />
            <PostBox Posts = {posts} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
