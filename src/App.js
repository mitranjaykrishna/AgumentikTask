import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './componenst/Home';
import NavBar from './componenst/NavBar';

const App=()=>{
  return <>
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exatct path='/' element={<Home />} />
      <Route exatct path='/services' element={<h1>/services</h1>} />
    </Routes>
  </BrowserRouter>

    {/* <Home /> */}
  </>
}

export default App;
