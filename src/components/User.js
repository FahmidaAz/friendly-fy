import React from 'react';
import './User.css';

const User = (props) => {
    const userInfo = props.user;
    return (
        <div className="usrInfo">
           <div className="description">
              <img src={userInfo.image} />
              <h1>{userInfo.first_name}</h1>   
           </div>
           <button> + Add Friend</button>
        </div>
    );
};

export default User;