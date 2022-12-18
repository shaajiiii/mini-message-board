import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import React from 'react';

function App() {

  const userLoggedIn = localStorage.getItem("token");


  return (
    <div className="App row">


      <Routes>

        {userLoggedIn ?
          <>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Home />} />
            <Route path="/signup" exact element={<Home />} />
          </>

          :
          <>
            <Route path="/" exact element={<Navigate to="/login" />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
          </>

        }



      </Routes>

    </div>
  );
}

export default App;
