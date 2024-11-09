import React, { useState } from 'react';
import '../assets/css/MobileBooking.css';

const MobileBooking = () => {



    return (
        <div className="MobileBooking">
            <div className="MAGAZINE-div">
                <a href="#Magazine" className="MAGAZINE-text">LE MAGAZINE</a>
            </div>
            <div className="RÉSERVER-div">
                <a href="#Reservations" className="RÉSERVER-text">RÉSERVER</a>
            </div>
        </div>
    );
};

export default MobileBooking;
