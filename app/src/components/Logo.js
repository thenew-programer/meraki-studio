"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../assets/css/Logo.css';
import LogoImage from '../assets/images/LoagoL.png';
import LogoImage2 from '../assets/images/LoagoL2.png';
import { BackgroundBeamsWithCollision } from "@/app/src/components/ui/background-beams-with-collision";

function Logo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BackgroundBeamsWithCollision className="app-container">
      <div className={`app-container ${isLoaded ? 'open' : ''}`}>
        <div className="white-BD">
          <div className="left-section"></div>
          <div className="right-section"></div>
        </div>
        <div className="logo-container">
          <div className="logo-container2">
          <Image src={LogoImage} className="logo" alt="Logo" priority />
          <div className="shine-effect"></div>
          </div>
          <Image
            src={LogoImage2}
            className={`animated-logo ${isLoaded ? 'fade-in' : ''}`}
            alt="Animated Logo"
            priority
          />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}


export default Logo;
