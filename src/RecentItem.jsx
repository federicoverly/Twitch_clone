import React from 'react';
import './RecentItem.css';

function RecentItem( { url, title }) {
    return (
        <div className="item">
            <iframe 
            title={title}
            width="400" 
            height="235" 
            src={url} 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            <div className="item__details">
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-285x380.jpg" alt="Science & Technology"/>
                <div className="item__detailList">
                    <h4>{title}</h4>
                    <p>cleverprogrammer</p>
                    <p>Science & Technology</p>
                </div>
            </div>
        </div>
    )
}

export default RecentItem
