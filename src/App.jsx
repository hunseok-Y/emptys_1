import './App.css'
import {useEffect, useState} from "react";

function App() {

    const [name, setName] = useState('Mr. Yang')

    const data = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
    ]

    const changeName = () => {
        setName("HoonSeok")
    }

    const [movies, setMovies] = useState([])

    useEffect(() => {
        setMovies(data)
    }, []);

  return (
      <>
          <h1>Hello World</h1>
          <h2>{name}</h2>
          {movies?.map((movie, index) => (
              <div key={index}>
                  <h1>{movie.title}</h1>
                  <h2>{movie.completed ? "완료" : "완려되지 않음"}</h2>
              </div>
          ))}
          <button onClick={changeName}>change</button>
      </>
  )
}

export default App
