import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';
import Sticky from 'sticky-js';

import Home from './pages/Home';
import Tutorials from './pages/Tutorials';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Documentation from './pages/Documentation';
import Help from './pages/Support';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import PageNotFound from './pages/PageNotFound';

function App() {

  const location = useLocation();
 
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
    // eslint-disable-next-line no-unused-vars
    const sticky = new Sticky('[data-sticky]');
  });

  const [metamask, setMetaMask] = useState(null);
  useEffect(() => {
    console.log("metamask", metamask);
    window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(res => {
        setMetaMask(res);
        // Return the address of the wallet
        console.log(res);
      });  
  },[]);  

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home metamask={metamask} />} />
  
        <Route path="/organisation_form" element={<Documentation metamask={metamask} />} />
      
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
