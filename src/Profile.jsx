import React from 'react';
import './Profile.css'
import RecentItem from './RecentItem';

function Profile() {
    return (
        <div className="profile">
            <div className="profile__topLeft">
                <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/d6c44369-f781-486d-ba13-16fe0a89d69a-profile_image-70x70.png" alt="Avatar"/>
                <div className="profile__topLeftDetails">
                    <h1>cleverprogrammer</h1>
                    <h3>820k followers</h3>
                </div>
            </div>
            <div className="profile__topRight">
                <i class="fas fa-heart graybg"></i>
                <i class="fas fa-bell graybg"></i>
                <i class="fas fa-ellipsis-v"></i>
            </div>
            <div className="profile__menu">
                <h2 className="active">Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2><i className="fas fa-arrow-up"></i></h2>
                <h2>Chat</h2>
            </div>
            <div className="profile__recent">
                <h2>Recent broadcasts</h2>
                <div className="profile__recentItems">
                    <RecentItem 
                    url={"https://www.youtube.com/embed/gzdQDxzW2Tw"}
                    title={"🔴 Build a Whatsapp Clone with MERN Stack (MongoDB, Express, React, Node JS)"} />
                    <RecentItem 
                    url={"https://www.youtube.com/embed/cF3pIMJUZxM"}
                    title={"🔴 Build a COVID-19 Tracker with REACT JS for Beginners (React Hooks and Material UI)"} />
                    <RecentItem 
                    url={"https://www.youtube.com/embed/UgBTKMUxudw"}
                    title={"🔴 Frontend Developer Guide 2021 (Your Roadmap to a Successful Career)"} />
                    <RecentItem 
                    url={"https://www.youtube.com/embed/KB7JEnfc7Dc"}
                    title={"🔴Full Stack React and Firebase Tutorial - Build a Facebook Messenger Clone"} />      
                </div>
                <div className="profile__categories">
                    <h2>cleverprogrammer's recently streamed categories</h2>
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-285x380.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Profile

