import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export default function Education (props){
    const {university,degree,timeline} = props;
    return (
        <div className="Education">
            <Card style={{ width: '20rem'  }}className="mx-auto">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title className="card-title-18px card-title-color-black">{university}</Card.Title>
                    <Card.Text>
                        {degree}
                        {timeline}
                    </Card.Text>
                    <Button variant="primary">Github</Button>
                </Card.Body>
        </Card>
            
        </div>    
    );
}
