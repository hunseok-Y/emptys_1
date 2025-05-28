import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const Tvs = () => {

    const [tvList, setTvList] = useState([]);

    const getTvList = async () => {
        try {
            const url = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1';
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2NlMjljMjc2MzZmODY0OGM0YzlmNmMyNGQyYTNhOCIsIm5iZiI6MTc0NzU0OTY5Ni41NjMsInN1YiI6IjY4Mjk3ZTAwOWFiODFhZjUwNWY1NTVkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TjVbPql5Eg1poQRSZYmAFUyeCkoojguMPja6DCNsTXE'
                }
            };

            const {data, status} = await axios.get(url, options);
            console.log(data)
            console.log(status)
            if(status === 200) {
                setTvList(data.results)
            }
        } catch (e) {console.log(e.message)
        }
    }

    useEffect(() => {
        getTvList()
    }, []);

    return (
        <Container>
            <Row>
                {tvList?.map((tv, index) => (
                    <Col className={"mb-3"} key={index}>
                        <Card style={{ width: '18rem' }} >
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{tv.name}</Card.Title>
                                <Card.Text>
                                    {tv.overview}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Tvs;