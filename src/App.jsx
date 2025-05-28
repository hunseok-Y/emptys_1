import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";

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
      <>
          <h1>{movies.length}</h1>
          {movies?.map((movie, index) => (
              <div key={index}>
                  <h1>{movie.overview}</h1>
              </div>
          ))}
      </>
  )
}

export default App
