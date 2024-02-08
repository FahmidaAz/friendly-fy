import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
    const userInfo = props.user;
    const handleFriend = props.handleFriend;
    const buttonText = props.buttonText;
    return (
        <div className="usrInfo">
           <div className="description">
            <img src={userInfo.image} />
            <div className="info">
              <h2>{userInfo.first_name} {userInfo.last_name}</h2>  
              <p>Worked at: {userInfo.Work}</p>
              <p>City: {userInfo.City}</p>
              <p>Location: {userInfo.Country}</p> 
              <button onClick={()=>handleFriend(userInfo)}><FontAwesomeIcon icon={faUserPlus}/> {buttonText}</button>
            </div>
           </div>

        </div>
    );
};

export default User;