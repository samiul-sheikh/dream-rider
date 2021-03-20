import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const HireCategory = (props) => {
    console.log(props.rides);
    const { image, name } = props.rides;

    const history = useHistory();

    const hireType = name => {
        const url = `/hire/${name}`
        history.push(url);
    }

    return (
        <div className="col-md-3" >
            <Card onClick={() => hireType(name)} style={{ width: '18rem', marginLeft:'50px' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>{name}</Card.Title>
                    <Button onClick={() => hireType(name)}>Hire {name}</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HireCategory;