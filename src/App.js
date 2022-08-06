
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Appoinment from './Components/Appoinment/Appoinment';
import ContactUs from './Components/ContactUS/ContactUs';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Footer from './Components/Shared/Footer';
import Header from './Components/Shared/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appoinment" element={<Appoinment />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
