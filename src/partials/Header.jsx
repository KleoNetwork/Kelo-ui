import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../utils/Transition';
import Dropdown from '../utils/Dropdown';
import Image from '../images/icon128.png';
import Metamask from '../images/metamask-icon.png';
function Header({metamask}) {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);
  
  const changeNetwork = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        window.ethereum._handleChainChanged({
          chainId: 0x1,
          networkVersion: 1,
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <header className={`w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Kleo">
              <img width={40} height={40} src={Image}></img>
            </Link>
            <h2 style={{ fontSize: "18px", color: "#5C4033", fontWeight: "900" }}>Brownie Points</h2>

          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}


            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">

              <li>
                {metamask == null ? <a target="_blank" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Connect Metamask </span> &nbsp;
                  <img width={20} src={Metamask} />
                </a> : <a target="_blank" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>{metamask[0]}</span>
                  </a>}
                
              </li>
            </ul>

          </nav>

          {/* Mobile menu */}


          {/* Hamburger button */}


          {/*Mobile navigation */}


        </div>
      </div>
    </header>
  );
}

export default Header;
