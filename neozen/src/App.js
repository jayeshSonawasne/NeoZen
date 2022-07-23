import "./App.css";
import Home from "./components/Home";
import {Routes,Route} from 'react-router-dom'
import AboutPage from "./components/AboutPage";
import ServicePage from "./components/ServicePage";
import ContactPage from "./components/ContactPage";
import Navbar from "./components/Navbar";
import SupportPage from "./components/SupportPage";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/service' element={<ServicePage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='/contactus' element={<ContactPage/>}/>
      {/* <Route path='/support' element={<Home/>}/> */}
      </Routes>
    </>
  );
}

export default App;
