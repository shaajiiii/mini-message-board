import React from 'react';
import Nav from '../../components/Nav/Nav';
import InputBox from '../../components/InputBox/InputBox';

import './Home.css'

function Home() {
  return (
    <>
      <div className="home">
        <Nav />

        <div className="content col-12 row d-flex justify-content-center">

          <div className="col-6">

            <InputBox />

          </div>

        </div>



      </div>



    </>
  )
}

export default Home;
