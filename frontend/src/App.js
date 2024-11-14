import Login from "./login";
import Signup from "./signup";
import Home from "./home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return (
    <BrowserRouter>
      <Routes>
        if(isLoggedIn){
          <Route path='/home' element={<Home />} />
        }else{
          <Route path='/' element={<Login />} />
        }
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
