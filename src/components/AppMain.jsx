import { useEffect, useState } from "react";

export default function AppMain({ movies }) {

    let moviesList = [...movies];

    const [showedMovies, setShowedMovies] = useState(moviesList);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [searchValue, setSearchValue] = useState("");

    const [newTitle, setNewTitle] = useState("");
    const [newGenre, setNewGenre] = useState("");

    const moviesGenres = [];
    moviesList.filter(movie => {
        if (!moviesGenres.includes(movie.genre)) {
            moviesGenres.push(movie.genre);
        }
    })

    useEffect(() => {

        if (selectedGenre || searchValue) {
            let filteredMovies = [...moviesList];
            console.log(filteredMovies);


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

    function handleSubmit(e) {
        e.preventDefault();

        if (newTitle.length >= 3 && newGenre) {
            moviesList = [{ title: newTitle, genre: newGenre }, ...moviesList];

            setShowedMovies(moviesList);
        }

    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />

                <select onChange={(e) => setNewGenre(e.target.value)}>
                    <option value="" >Nessun genere selezionato</option>
                    {
                        moviesGenres.map((genre, i) => (
                            <option key={i} value={genre} >{genre}</option>
                        ))
                    }
                </select>

                <button type="submit">Aggiungi</button>
            </form>

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