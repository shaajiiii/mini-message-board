import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'; 
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <div className="App">

      app

    <Routes>

      <Route path="/" exact element={<Home/>} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<Signup />} />
     
    </Routes>

    </div>
  );
}

export default App;
