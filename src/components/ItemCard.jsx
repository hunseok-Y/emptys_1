import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const ItemCard = ({data, origin}) => {

    const navigate = useNavigate();

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
                        {data.release_date ? data.release_date : data.first_air_date}
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate(`/${origin}/${data.id}`)}>Go Detail</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ItemCard;