import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

function App() {

    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        try {
            const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
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

            if (status === 200) {
                setMovies(data.results)
            }
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getMovies()
    }, []);

  return (
      <Container>
          <Row>
              {movies?.map((movie, index) => (
                  <Col className={"mb-3"} key={index}>
                      <Card style={{width: "18rem"}}>
                          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></Card.Img>
                          <Card.Body>
                              <Card.Title>{movie.original_title.slice(0, 10)}</Card.Title>
                              <Card.Text>{movie.overview.slice(0, 100)}</Card.Text>
                              <Card.Text>
                                  출시일 :
                                  {movie.release_date}
                              </Card.Text>
                          </Card.Body>
                          <Button variant="primary">Go somewhere</Button>
                      </Card>
                  </Col>
              ))}
          </Row>
      </Container>
  )
}

export default App
