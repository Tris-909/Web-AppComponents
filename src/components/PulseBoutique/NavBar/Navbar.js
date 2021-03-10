import React, {useState} from 'react';
import './Navbar.css';

import BottomBar from '../BottomBar/BottomBar';

import logo from '../../../logo.png';

import vacation_1 from '../images/vacation/vacation_1.jpg';
import vacation_2 from '../images/vacation/vacation_2.jpg';
import vacation_3 from '../images/vacation/vacation_3.jpg';
import vacation_4 from '../images/vacation/vocation_4.jpg';
import vacation_5 from '../images/vacation/vocation_5.jpg';

import tops_1 from '../images/tops/tops_1.jpg';
import tops_2 from '../images/tops/tops_2.jpg';
import tops_3 from '../images/tops/tops_3.jpg';
import tops_4 from '../images/tops/tops_4.jpg';
import tops_5 from '../images/tops/tops_5.jpg';

import dress_1 from '../images/dresses/dress_1.jpg';
import dress_2 from '../images/dresses/dress_2.jpg';
import dress_3 from '../images/dresses/dress_3.jpg';
import dress_4 from '../images/dresses/dress_4.jpg';
import dress_5 from '../images/dresses/dress_5.jpg';

import bottom_1 from '../images/bottoms/bottom_1.jpg';
import bottom_2 from '../images/bottoms/bottom_2.jpg';
import bottom_3 from '../images/bottoms/bottom_3.jpg';
import bottom_4 from '../images/bottoms/bottom_4.jpg';
import bottom_5 from '../images/bottoms/bottom_5.jpg';

import acc_1 from '../images/accessories/acc_1.jpg';
import acc_2 from '../images/accessories/acc_2.jpg';
import acc_3 from '../images/accessories/acc_3.jpg';
import acc_4 from '../images/accessories/acc_4.jpg';
import acc_5 from '../images/accessories/acc_5.jpg';

const NavBar = () => {
  const [active, setActive] = useState("");
  const [bottomBarInfo, setBottomBarInfo] = useState({});

  const [vacation, setVacation] = useState([
    'Vacation',
    'Swim'
  ]);
  const [vacationImages, setVacationImages] = useState([
    vacation_1,
    vacation_2,
    vacation_3,
    vacation_4,
    vacation_5
  ]);

  const [tops, setTops] = useState([
    'Tops',
    'Sweaters',
    'Kimonos/Cardigans',
    'Hoodies',
    'Casual Tops',
    'Tank Tops'
  ]);
  const [topImages, setTopImages] = useState([
    tops_1,
    tops_2,
    tops_3,
    tops_4,
    tops_5
  ]);

  const [dresses, setDresses] = useState([
    'Dresses',
    'All Dresses',
    'Maxi Dresses',
    'Short Dresses',
    'Rompers'
  ]);
  const [dressImages, setDressImages] = useState([
    dress_1,
    dress_2,
    dress_3,
    dress_4,
    dress_5
  ])

  const [bottoms, setBottoms] = useState([
    'Bottoms',
    'Leggings',
    'Pants', 
    'Jeans',
    'Shorts'
  ]);
  const [bottomImages, setBottomImages] = useState([
    bottom_1,
    bottom_2,
    bottom_3,
    bottom_4,
    bottom_5
  ]);

  const [accessories, setAccessories] = useState([
    'Accessories',
    'All Accessories',
    'Neckales',
    'Bracelets',
    'Earrings',
    'Purses'
  ]);
  const [accImages, setAccImages] = useState([
    acc_1,
    acc_2,
    acc_3,
    acc_4,
    acc_5,
  ]);

  const onHoverHandler = (value) => {
    setActive(false);

    switch(value) {
      case 'Vacation':
        setBottomBarInfo({
          textArr: vacation,
          images: vacationImages
        });
        break;
      case 'Tops':
        setBottomBarInfo({
          textArr: tops,
          images: topImages
        });
        break;
      case 'Dresses':
        setBottomBarInfo({
          textArr: dresses,
          images: dressImages
        });
        break;
      case 'Bottoms':
        setBottomBarInfo({
          textArr: bottoms,
          images: bottomImages
        });
        break;
      case 'Acc':
        setBottomBarInfo({
          textArr: accessories,
          images: accImages
        });
        break;
      default: 
        break;
    }

    setTimeout(() => {
      setActive(true);
    }, 400);
  }

  const onLeaveHandler = () => {
    setActive(false);
  }

    return(
      <>
      <nav className="nav">
        <div className="navContainer">
          <img src={logo} alt="Pulse" className="logo"/>

          <div>
            <a href="#" className="text">
              New Arrivals
            </a>
          </div>

          <div>
            <a href="#" className="text" 
              onMouseEnter={() => onHoverHandler('Vacation')}
            >
            Vacation <i className="fas fa-angle-down"></i>
            </a>
          </div>

          <div>
            <a href="#" className="text"
            onMouseEnter={() => onHoverHandler('Tops')}>
            Tops <i className="fas fa-angle-down"></i>
            </a>
          </div>

          <div>
            <a href="#" className="text"
             onMouseEnter={() => onHoverHandler('Dresses')}>
            Dresses <i className="fas fa-angle-down"></i>
            </a>
          </div>

          <div>
            <a href="#" className="text"
            onMouseEnter={() => onHoverHandler('Bottoms')}>
            Bottoms <i className="fas fa-angle-down"></i>
            </a>
          </div>

          <div>
            <a href="#" className="text">
            Shoes
            </a>
          </div>

          <div>
            <a href="#" className="text" 
            onMouseEnter={() => onHoverHandler('Acc')}>
            Accessories <i className="fas fa-angle-down" 
            ></i>
            </a>
          </div>

          <div>
            <a href="#" className="text">
            Blog
            </a>
          </div>

          <div>
            <a href="#" className="text">
            E-Gift Card 
            </a>
          </div>

          <div>
            <a href="#" className="text">
            SALE 
            </a>
          </div>
        </div>
      </nav>
      <BottomBar 
        active={active} 
        onLeaveHandler={onLeaveHandler} 
        bottomBarInfo={bottomBarInfo}
      />
      </>
    );
}

export default NavBar;