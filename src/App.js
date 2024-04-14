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
        <Route path="https://writera.netlify.app/" element={<MainPage />} />
        <Route path="https://writera.netlify.app/Aboutus" element={<AboutUs/>}/>
        <Route path="https://writera.netlify.app/Contactus" element={<ContactUs/>}/>
        <Route path='https://writera.netlify.app/home' element={<Blogscontent/>}/>

        <Route path="https://writera.netlify.app/Signin" element={<Signin />} />
        <Route path="https://writera.netlify.app/signup" element={<Signup />} />
         <Route path="https://writera.netlify.app/Createblog" element={<Createblog/>}/> 
         <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
  </BrowserRouter>
   
  );
}

export default App;
