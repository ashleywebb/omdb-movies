export default function MovieDisplay({movie}) {
    const loaded = () => {
        return (
            <div class="card">
                <div class="container">
                    <h1>{movie.Title}</h1>
                    <h2>{movie.Genre}</h2>
                </div>
                <img src={movie.Poster} alt={movie.Title}/>
                <div class="container">
                    <h2>{movie.Year}</h2>
                </div>
            </div>
        )
    }

    const loading = () => {
        return <h1>No Movie to Display</h1>
    }

    return movie && movie.Title ? loaded() : loading();
}