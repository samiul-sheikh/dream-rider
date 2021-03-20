import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import RidersData from '../../Data/RidersData.json';
import map from '../../images/map.png'

const RidesInfo = () => {

    const { name } = useParams()

    const [ridesInfo, setRidesInfo] = useState({})

    const setRide = RidersData.find(ride => ride.name === name)

    useEffect(() => {
        setRidesInfo(RidersData);
        console.log(RidersData);
    }, [])

    return (
        <div className="row">
            <div className="col-md-6" style={{ textAlign: 'center' }}>
                <h1>Your Rides Type: {name}</h1>
                <p>cost: {setRide.cost}</p>
                <img src={setRide.image} alt="" />
            </div>
            <div className="col-md-6">
                <img src={map} alt="" />
            </div>
        </div>
    );
};

export default RidesInfo;