import React from 'react';
import './PulseBoutique.css';
import background from './images/background.img';

import Navbar from './NavBar/Navbar';
import SecondNav from './SecondNav/SecondNav';
import ImageSection from './ImageSection/ImageSection';
import ShopNewArrival from './ShopNewArrival/ShopNewArrival';
import Member from './Member/Member';

const PulseBoutique = () => {
    return(
        <div className="behindscreen">
            <Navbar />
            <SecondNav />
            <img src={background} alt="background" className="pulseboutique_background" />
            <ImageSection />
            <ShopNewArrival />
            <Member />
        </div>
    );
}

export default PulseBoutique;