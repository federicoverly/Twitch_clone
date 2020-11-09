import React from 'react';
import Channel from './Channel';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h5>FOLLOWED CHANNELS</h5>
                <Channel avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/d6c44369-f781-486d-ba13-16fe0a89d69a-profile_image-70x70.png"
                name="clemengadea"
                followers="470"/>
                <Channel avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/01e090cac26e0de0-profile_image-150x150.png"
                name="cleverprogrammer"
                followers="820k"/> 
                <h5>RECOMMENDED CHANNELS</h5>
                <Channel avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/df9d3ba5-f263-4abb-910e-e00f3fd27b81-profile_image-150x150.png"
                name="ArgentinaGameShow"
                followers="2890"/> 
                <p className="sidebar__topShowMore">Show More</p>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__buttonContainer">
                   <i className="fas fa-search"></i>
                   <input type="text" placeholder="Search to Add Friends" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
