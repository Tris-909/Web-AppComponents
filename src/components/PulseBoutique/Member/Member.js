import React from 'react';
import './Member.css';
import MemberImage from '../images/member.jpg';

const Member = () => {
    return(
        <div className="member_container">
            <img src={MemberImage} className="member_image" alt="membership" />
            <div className="member_text">
                <div className="member_pulse">Pulse</div>
                <div className="member_perk">Perks</div>
                <div className="member_earnpoints">Earn Points & Get Rewards</div>
                <div className="member_perkContainer">
                    <div><i className="fas fa-star"></i> Free Gifts</div>
                    <div><i className="fas fa-star"></i> Exclusive Discount</div>
                    <div><i className="fas fa-star"></i> Birthday Bonus</div>
                    <div><i className="fas fa-star"></i> Giveaways</div>
                </div>


                <div>
                    <button className="member_memberlogin"> Members login </button>
                    <button className="member_findout"> Find Out More </button>
                </div>
            </div>
        </div>
    );
}

export default Member;