import React from 'react';
import './PulseBoutique.css';
import background from './images/background.img';

import Navbar from './NavBar/Navbar';
import SecondNav from './SecondNav/SecondNav';
import ImageSection from './ImageSection/ImageSection';

const PulseBoutique = () => {
    return(
        <div className="behindscreen">
            <Navbar />
            <SecondNav />
            <img src={background} alt="background" className="pulseboutique_background" />
            <ImageSection />
        </div>
    );
}

export default PulseBoutique;