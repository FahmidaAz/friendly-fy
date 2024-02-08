import React from 'react';
import profileImg from'../images/DSC03334.jpeg';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserFriends,faMessage,faPhotoFilm,faVideo} from '@fortawesome/free-solid-svg-icons';
const Profile = () => {
    const imgStyle = {
        width:'120px',
         height:'200px'
       }
    return (
        <div>
        <div className="profile">
            <div className="image">
              <img style={imgStyle} src={profileImg} alt="" />
            </div>
         <div className="proDescription">
           <h2>Shoily Azmin</h2>
           <p>Job: Senior Software Developer</p>
           <p>City: Brooklyn, New York</p>
           <p>Country: United States</p>
           <div className="navigation">
            <a href="#post">Posts</a>
            <a href="#photos"><FontAwesomeIcon icon={faPhotoFilm}/> Photos</a>
            <a href="#videos"><FontAwesomeIcon icon={faVideo}/> Videos</a>
            <a href="#friend"><FontAwesomeIcon icon={faUserFriends}/></a>
            <a href="#msg"><FontAwesomeIcon icon={faMessage}/></a>
           </div>
           </div>     
        </div>
       
        </div>
    );
};

export default Profile;