
import './App.css';
import users from './user/userData.json';
import { useEffect, useState } from 'react';
import User from './components/User';

function App() {
   const [user, setUser]=useState([]);
   useEffect(()=>{
    setUser(users);
    
   });
   
  return (
    <div className="App">
      <div className="navBar">
        <nav>
          <a href="">Home</a>
          <a href="">Notification</a>
          <a href=""> Friends</a>
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
