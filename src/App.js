import React from 'react';
import './App.css';
import users from './user/userData.json';
import { useEffect, useState } from 'react';
import User from './components/User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell,faUserFriends,faHome} from '@fortawesome/free-solid-svg-icons';



function App() {
   const [user, setUser]=useState([]);
   useEffect(()=>{
    setUser(users);
    
   });
   
  return (
    <div className="App">
      <div className="navBar">
        <nav>
          <a href="Home"><FontAwesomeIcon icon={faHome}/>Home</a>
          <a href="Notification"><FontAwesomeIcon icon={faBell}/> Notification</a>
          <a href="Friends"> <FontAwesomeIcon icon={faUserFriends}/> Friends</a>
        </nav>
      </div>
        {
          users.map(usr =><User user={usr}></User>)
        }
      <div className='footer'>
      <footer>All rights are reserved, Fahmida Azmin, 2024</footer>
      </div>
    </div>
  );
}

export default App;
