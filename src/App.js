
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Appoinment from './Components/Appoinment/Appoinment';
import ContactUs from './Components/ContactUS/ContactUs';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Header from './Components/Shared/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Myappoinment from './Components/Dashboard/Myappoinment';
import Myreview from './Components/Dashboard/Myreview';
import Allusers from './Components/Dashboard/Allusers';
function App() {
  return (
    
    <div className='max-w-7xl	mx-auto px-12'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appoinment" element={
          <RequireAuth>
            <Appoinment />
          </RequireAuth>
        } />
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        } >
          <Route index element={<Myappoinment></Myappoinment>}></Route>
          <Route path='dashboard/myreview' element={<Myreview></Myreview>}></Route>
          <Route path='dashboard/users' element={<Allusers></Allusers>}></Route>
        </Route>
        <Route path="contactus" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp/>} />
     
      </Routes>
      <ToastContainer />
    </div>
  
  );
}

export default App;
