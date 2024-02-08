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
   const[friend, setFriend] = useState([]);
   const [buttonText,setText] = useState('Add Friend');
   useEffect(()=>{
    setUser(users);
   });
   useEffect(() => {
    setUser(users);
    // Set initial button text for each user
    const initialButtonTexts = {};
    users.forEach(usr => {
      initialButtonTexts[usr.id] = 'Add Friend'; // Assuming each user has a unique 'id' property
    });
    setText(initialButtonTexts);
   }, [users]);
   const handleFriend = (user)=>{
    console.log(user);
    const newFriend = [...friend,user];
    console.log(newFriend);
    setFriend(newFriend);
   
    setText(prevButtonTexts => ({
      ...prevButtonTexts,
      [user.id]: 'Friend' // Update the text for this user's button
    }));
   }
   
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
                 users.map(usr =><User  key={usr.id} buttonText={buttonText[usr.id]} handleFriend={handleFriend}user={usr}></User>)
                }
             </div>
            <div className="homepage">
             <Profile total={friend.length}></Profile>
            </div>
        </div>
      <div className='footer'>
      <footer><FontAwesomeIcon icon={faCopyright}/> All rights are reserved, Fahmida Azmin, 2024</footer>
      </div>
    </div>
  );
}

export default App;
