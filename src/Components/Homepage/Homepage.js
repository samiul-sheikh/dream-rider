import React from 'react';
import './Homepage.css';
import bgImage from '../../images/background.png';

const Homepage = () => {
    return (
        <div className="home" style={{ backgroundImage: `url(${bgImage})` }}>
            <h1>This is Homepage</h1>
        </div>
    );
};

export default Homepage;