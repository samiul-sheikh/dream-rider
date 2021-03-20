import React, { useEffect, useState } from 'react';
import './Homepage.css';
import bgImage from '../../images/background.png';
import RidersData from '../../Data/RidersData.json';
import HireCategory from '../HireCategory/HireCategory';

const Homepage = () => {
    const [ridesType, setRidesType] = useState([]);

    useEffect(() => {
        setRidesType(RidersData);
        console.log(RidersData);
    }, [])

    return (
        <div className="home" style={{ backgroundImage: `url(${bgImage})` }}>
            <h1>This is Homepage</h1>
            <h2>Total Rides Type: {ridesType.length}</h2>
            {
                ridesType.map(rides => <HireCategory rides={rides}></HireCategory>)
            }
        </div>
    );
};

export default Homepage;