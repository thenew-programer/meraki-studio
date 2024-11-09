.home-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }
  
  .loading-screen {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white; /* Optional background for loading */
  }
  
  .content {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white; /* Adjust text color */
  }
  
  .image-bg {
    background-image: url('../assets/background-image.jpg'); /* Your fixed image path */
    background-size: cover;
    background-position: center;
  }
  
  .video-bg {
    background: black; /* Placeholder for video */
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .play-button {
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    background-color: rgba(228, 221, 208, 0.8);
    color: black;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .services {
    margin-top: 40px;
    text-align: center;
  }
  
  .navbar {
    transition: background-color 0.3s;
  }
  
  .navbar.transparent {
    background-color: transparent;
  }
  
  .navbar.solid {
    background-color: black;
  }
  

  "use client"; // Mark this file as a client component

import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import Image from 'next/image'; // Import next/image for image optimization
import SampleLoadingImage from '../assets/sample-loading-image.jpg'; // Sample loading image path (replace with your image)

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [bgVideo, setBgVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Change to false after a period
    }, 3000); // Set loading period to 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleVideoPlay = () => {
    setBgVideo(true);
  };

  return (
    <div className="home-container">
      {loading ? (
        <div className="loading-screen">
          <Image src={SampleLoadingImage} alt="Loading..." layout="fill" objectFit="cover" />
        </div>
      ) : (
        <div className={`content ${bgVideo ? 'video-bg' : 'image-bg'}`}>
          <Navbar />
          <div className="overlay">
            <div className="logo-container">
              <Logo />
              <button className="play-button" onClick={handleVideoPlay}>Play Video</button>
            </div>
            <div className="services">
              <h2>Le Spa & Bien-être</h2>
              <h2>Les Massages</h2>
              <h2>Les Hammams</h2>
              <h2>Les Soins</h2>
              <h2>Le Salon de Coiffure & Beauté</h2>
              <h2>Les Sports</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
