import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/FeaturesHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesWorld from '../partials/FeaturesWorld';
import News from '../partials/News';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';
import Image from '../images/icon128.png';

function Home({metamask}) {
 
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header metamask={metamask} />

      {/*  Page content */}
      <div style={{height: "600px"}}>
      <main className="grow" style={{margin: "0", position:"absolute", top:"20%", left: "40%" }}>

        {/*  Page sections */}
        <Link to="/organisation_form" className="block" aria-label="Kleo">
              <img width={128} height={128} src={Image}></img>
              <h2 style={{fontSize: "18px", color: "#5C4033", fontWeight: "900"}}>Register your organisation! <br/> Understand User Data</h2>
        </Link>
      
           

      </main>
      </div>
      {/*  Site footer */}
       <Footer /> 

    </div>
  );
}

export default Home;