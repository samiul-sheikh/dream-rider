import React from 'react';
import { useHistory } from 'react-router';

const HireCategory = (props) => {
    console.log(props.rides);
    const { name, cost } = props.rides;

    const history = useHistory();

    const hireType = name => {
        const url = `/hire/${name}`
        history.push(url);
    }

    return (
        <div style={{ border: '1px solid blue', margin: '20px' }}>
            <div>
                <h1>{name}</h1>
                <h2>{cost}</h2>
                <button onClick={() => hireType(name)}>Hire {name}</button>
            </div>
        </div>
    );
};

export default HireCategory;