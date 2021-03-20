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
            <div style={{textAlign: 'center', marginBottom:'40px'}}>
                <h1>Welcome To Dream Rider....</h1>
            </div>
            <div className="row">
                {
                    ridesType.map(rides => <HireCategory rides={rides}></HireCategory>)
                }
            </div>
        </div>
    );
};

export default Homepage;