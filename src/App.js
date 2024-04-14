import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Signin from './Signin';
import Signup from './Signup';
import MainPage from './Home/MainPage';
import Createblog from './Createblog'
import NotFoundPage from './Notfound';
import AboutUs from './Aboutus';
import ContactUs from './Contactus';
import Blogscontent from './Home/Blogscontent'

function App() {
  return (
    
<BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Aboutus" element={<AboutUs/>}/>
        <Route path="/Contactus" element={<ContactUs/>}/>
        <Route path='/home' element={<Blogscontent/>}/>

        <Route path="/Signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/Createblog" element={<Createblog/>}/> 
         <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
  </BrowserRouter>
   
  );
}

export default App;
