import React from 'react';
import './BottomBar.css';

const BottomBar = ({ active, onLeaveHandler, bottomBarInfo }) => {

    return(
        <div className="background" 
            style={{
                visibility: active ? 'visible' : 'hidden',
                opacity: active ? 1 : 0
            }}
            onMouseLeave={onLeaveHandler}>
                <div className="textConatiner_gridarea">
                    <div className="textConatiner">
                        {
                            bottomBarInfo.textArr ? bottomBarInfo.textArr.map((text, index) => {
                                if (index === 0) {
                                    return(<h3 key={index} className="maintext">{text}</h3>)
                                } else {
                                    return(
                                        <p key={index} className='subtext'>
                                            {text}
                                        </p>
                                    )
                                }
                            })  : null
                        }
                    </div>
                </div>
                <div className="imageContainer_gridarea">
                    <div className="imageContainer">
                        {
                            bottomBarInfo.images ? bottomBarInfo.images.map((image, index) => {
                                return(
                                    <img src={image} key={index} alt="Product" className="img" />
                                )
                            })  : null
                        }
                    </div>
                </div>         
        </div>
    )
}

export default BottomBar;