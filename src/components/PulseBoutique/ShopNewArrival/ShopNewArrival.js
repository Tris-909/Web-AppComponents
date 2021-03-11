import React, {useState} from 'react';
import './ShopNewArrival.css';

import img_cr_1 from '../images/imageCarousel/img_cr_1.jpg';
import img_cr_2 from '../images/imageCarousel/img_cr_2.jpg';
import img_cr_3 from '../images/imageCarousel/img_cr_3.jpg';
import img_cr_4 from '../images/imageCarousel/img_cr_4.jpg';
import img_cr_5 from '../images/imageCarousel/img_cr_5.jpg';
import img_cr_6 from '../images/imageCarousel/img_cr_6.jpg';
import img_cr_7 from '../images/imageCarousel/img_cr_7.jpg';
import img_cr_8 from '../images/imageCarousel/img_cr_8.jpg';
import img_cr_9 from '../images/imageCarousel/img_cr_9.jpg';

const ShopNewArrival = () => {
    const [carouselItems, setCarouselItems] = useState([
        {
            id: 0,
            image: img_cr_1,
            name: 'Lean A Little Closer Quarter Zip Sherpa - Olive',
            price: 42.95
        },
        {
            id: 1,
            image: img_cr_2,
            name: 'Very G Sparta Floral Sandals-Cream',
            price: 44.95
        },
        {
            id: 3,
            image: img_cr_3,
            name: 'Eunina Mid-Rise Skinny Jeans Vivian Wash',
            price: 52.95
        },
        {
            id: 4,
            image: img_cr_4,
            name: 'Memory Filled Moments Color Block Top - Grey & Ivory',
            price: 38.95
        },
        {
            id: 5,
            image: img_cr_5,
            name: 'Uplifting Spirits Button Henley Tank - Top Heather Grey',
            price: 32.95
        },
        {
            id: 6,
            image: img_cr_6,
            name: 'Just Around The Bend Color Block Top - Grey & Camo',
            price: 36.95
        },
        {
            id: 7,
            image: img_cr_7,
            name: '"Happy Mama" Rainbow Graphic Tee - Light Heather Grey',
            price: 32.95
        },
        {
            id: 8,
            image: img_cr_8,
            name: 'A Day With You Knit Hoodle Taupe & Cream',
            price: 42.95
        },
        {
            id: 9,
            image: img_cr_9,
            name: 'Blowfish Raelynn Sandals-Seamushroom Dyecut',
            price: 49.95
        }
    ]);

    return(
        <div className="shopnewarrival_background">
            <h1 className="shopnewarrival_title">SHOP NEW ARRIVAL</h1>
            
            <div className="shopnewarrival_hs">
                {carouselItems.map((item) => {
                    return(
                        <div className="shopnewarrival_container">
                            <img key={item.id} src={item.image} alt={item.name} className="shopnewarrival_image" />
                            {/* <span className="shopnewarrival_text"> {item.name} </span> */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ShopNewArrival;