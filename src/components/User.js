import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
    const userInfo = props.user;
    return (
        <div className="usrInfo">
           <div className="description">
              <img src={userInfo.image} />
              <h1>{userInfo.first_name}</h1>   
           </div>
           <button> <FontAwesomeIcon icon={faUserPlus}/> Add Friend</button>
        </div>
    );
};

export default User;