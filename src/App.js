import { useState } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";


export default function App(){
    const apiKey = 'f987f1a6';

    const [ movie, setMovie ] = useState(null);

    const getMovie = async (searchTerm) => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
            const data = await response.json();
            setMovie(data);
        }catch(error) {
            console.error(error)
        }

    }

    return (
        <div className="App">
            <Form movieSearch={getMovie} />
            <MovieDisplay movie = {movie}/>
        </div>
    )
}