import React from 'react';
import {Button, Card, Col} from "react-bootstrap";

const ItemCard = ({data}) => {
    return (
        <Col className={"mb-3"}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
                <Card.Body>
                    <Card.Title>{data.title ? data.title.slice(0, 10) : data.name.slice(0, 10)}</Card.Title>
                    <Card.Text>
                        {data.overview.slice(0, 120)}
                    </Card.Text>
                    <Card.Text>
                        출시일 :
                        {data.release_date}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ItemCard;