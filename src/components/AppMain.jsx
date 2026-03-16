import { useEffect, useState } from "react";

export default function AppMain({ movies }) {

    let moviesList = [...movies];

    const [showedMovies, setShowedMovies] = useState(moviesList);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [searchValue, setSearchValue] = useState("");

    const moviesGenres = [];
    moviesList.filter(movie => {
        if (!moviesGenres.includes(movie.genre)) {
            moviesGenres.push(movie.genre);
        }
    })

    useEffect(() => {

        if (selectedGenre || searchValue) {
            let filteredMovies = [...moviesList];

            if (selectedGenre) {
                filteredMovies = filteredMovies.filter(film => film.genre === selectedGenre);
            }

            if (searchValue != "") {
                filteredMovies = filteredMovies.filter(film => film.title.toLowerCase().includes(searchValue));
            }

            setShowedMovies(filteredMovies);
        } else {
            setShowedMovies(moviesList);
        }

    }, [selectedGenre, searchValue])

    return (
        <main>
            <div className="filters">
                <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />

                <select onChange={(e) => setSelectedGenre(e.target.value)}>
                    <option value="" >Tutti i generi</option>
                    {
                        moviesGenres.map((genre, i) => (
                            <option key={i} value={genre} >{genre}</option>
                        ))
                    }
                </select>
            </div>

            <div className="films-list">
                <ul>
                    {
                        showedMovies.map((movie, i) => (
                            <li key={i}>{movie.title} - {movie.genre}</li>
                        ))
                    }
                </ul>
            </div>
        </main >
    );
}