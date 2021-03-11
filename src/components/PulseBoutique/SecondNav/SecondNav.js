import React from 'react';
import './SecondNav.css';

const SecondNav = () => {
    return(
        <div className="secondnav_background">
            <div className="secondnav_container">
                <i className="fas fa-truck-moving secondnav_icon"></i>
                <a href="#" className="secondnav_text"> SAME DAY SHIPPING  </a>
            </div>

            <div className="secondnav_container">
                <i class="fas fa-box secondnav_icon"></i>
                <a href="#" className="secondnav_text"> OVER 300,000 ORDERS SHIPPED </a>
            </div>

            <div className="secondnav_container">
                <i class="fas fa-recycle secondnav_icon"></i>       
                <a href="#" className="secondnav_text"> 14 DAYS REFUNDS </a>
            </div>
        </div>
    );
}

export default SecondNav;