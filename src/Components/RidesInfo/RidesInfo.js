import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import RidersData from '../../Data/RidersData.json';

const RidesInfo = () => {

    const { name } = useParams()

    const [ridesInfo, setRidesInfo] = useState({})

    const setRide = RidersData.find(ride => ride.name === name)

    useEffect(() => {
        setRidesInfo(RidersData);
        console.log(RidersData);
    }, [])

    return (
        <div>
            <h1>This is Rides Info: {name}</h1>
            <p>cost: {setRide.cost}</p>
        </div>
    );
};

export default RidesInfo;