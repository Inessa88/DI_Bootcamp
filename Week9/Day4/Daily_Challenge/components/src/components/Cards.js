// import Button from 'react-bootstrap/Button';
import React from "react";
import Card from 'react-bootstrap/Card';

function Cards (props) {
  return (
    <Card style={{ width: '40rem', margin: '40px'  }}>
      <Card.Body>
        <Card.Title>{props.children} {props.lable}</Card.Title>
        <Card.Text>
        <h1>{props.number}</h1>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;

