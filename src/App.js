import React from 'react';
import './App.css';
import users from './userdata/userData.json';
import { useEffect, useState } from 'react';
import User from './components/Users/User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell,faUserFriends,faHome,faCopyright} from '@fortawesome/free-solid-svg-icons';
import Profile from './components/Profile/Profile';


function App() {
   const [user, setUser]=useState([]);
   useEffect(()=>{
    setUser(users);
    
   });
   
  return (
    <div className="App">
      <div className="navBar">
        <nav>
          <a href="Home"><FontAwesomeIcon icon={faHome}/> Home</a>
          <a href="Notification"><FontAwesomeIcon icon={faBell}/> Notification</a>
          <a href="Friends"> <FontAwesomeIcon icon={faUserFriends}/> Friends</a>
        </nav>
         
      </div>
      <div className="container">
            <div className="mappingUsers">
                {
                 users.map(usr =><User user={usr}></User>)
                }
             </div>
            <div className="homepage">
             <Profile></Profile>
            </div>
        </div>
      <div className='footer'>
      <footer><FontAwesomeIcon icon={faCopyright}/> All rights are reserved, Fahmida Azmin, 2024</footer>
      </div>
    </div>
  );
}

export default App;
