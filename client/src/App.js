import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from './components/Landing Page/LandingPage';
import Nav from './components/Nav/Nav';
import HomePage from "./components/Home Page/HomePage";
import DetailPage from "./components/Detail Page/DetailPage";
import FormPage from "./components/Form Page/FormPage";
import About from './components/About/About';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/*Renderizado Condicional de Nav*/}
      {location.pathname!=="/" && 
      <Nav />}
    
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/form' element={<FormPage/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
