import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Experience(props) {
    const { title, company, date, description } = props;

    return (
        <div className="experience">
        <Card style={{ width: '20rem'  }}className="mx-auto">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title className="card-title-18px card-title-color-black">{title}</Card.Title>
            <Card.Text>
              {description}
              {company}
              {date}
            </Card.Text>
            <Button variant="primary">Github</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }