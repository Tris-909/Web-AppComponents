import React from 'react';

import './ImageSection.css';

import vacation from '../images/vacation/vacation_3.jpg';
import bottom from '../images/bottoms/bottom_4.jpg';
import swim from '../images/swim.jpg';

const ImageSection = () => {
    return(
        <div className="imagesection_container">
            <div className="imagesection_smaller_container">
                <img src={vacation} alt="Vacation" 
                className="imagesection_image" />
                <button className="imagesectino_button">
                    <span className="imagesection_text">Shop New</span>
                    <i className="fas fa-long-arrow-alt-right imagesection_icon"></i>
                </button>
            </div>

            <div className="imagesection_smaller_container">
                <img src={bottom} alt="Vacation" 
                className="imagesection_image"/>
                <button className="imagesectino_button">
                    <span className="imagesection_text">Shop Bottoms</span>
                    <i className="fas fa-long-arrow-alt-right imagesection_icon"></i>
                </button>
            </div>

            <div className="imagesection_smaller_container">
                <img src={swim} alt="Vacation" 
                className="imagesection_image"/>
                <button className="imagesectino_button">
                    <span className="imagesection_text">Shop Swim</span>
                    <i className="fas fa-long-arrow-alt-right imagesection_icon"></i>
                </button>
            </div>
        </div>
    );
}

export default ImageSection;