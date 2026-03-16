import { useEffect, useState } from "react";

export default function AppMain({ movies }) {

    const [moviesList, setMoviesList] = useState(movies);
    const [showedMovies, setShowedMovies] = useState(moviesList);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [searchValue, setSearchValue] = useState("");

    const [newTitle, setNewTitle] = useState("");
    const [newGenre, setNewGenre] = useState("");

    const [titleHelp, setTitleHelp] = useState("");
    const [genreHelp, setGenreHelp] = useState("");

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

    }, [selectedGenre, searchValue, moviesList])

    function handleSubmit(e) {
        e.preventDefault();

        setTitleHelp("");
        setGenreHelp("");

        if (newTitle.length >= 3 && newGenre) {
            const newList = [{ title: newTitle, genre: newGenre }, ...moviesList];
            setMoviesList(newList);

            setNewTitle("");
            setNewGenre("");
        } else {

            if (newTitle.length < 3) {
                setTitleHelp("Il titolo deve essere almeno lungo 3 caratteri");
            }

            if (!newGenre) {
                setGenreHelp("Devi selezionare un genere");
            }
        }

    }

    return (
        <main>
            <div className="container">

                <form className="mb-3 py-4" onSubmit={handleSubmit}>

                    <h2 className="mb-3">Aggiungi un film</h2>

                    {/* INPUT TITLE */}
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Titolo</label>
                        <input
                            type="text"
                            className="form-control"
                            aria-describedby="titleHelp"
                            placeholder="Avatar 2"

                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                        {
                            titleHelp &&

                            <small id="titleHelp" className="form-text text-danger">
                                {titleHelp}
                            </small>
                        }
                    </div>

                    {/* SELECT GENRE */}
                    <div className="mb-3">
                        <label htmlFor="genre" className="form-label">Genere</label>
                        <select
                            className="form-select form-select"
                            aria-describedby="genreHelp"

                            value={newGenre}
                            onChange={(e) => setNewGenre(e.target.value)}
                        >
                            <option value="" disabled>Seleziona un genere</option>
                            {
                                moviesGenres.map((genre, i) => (
                                    <option key={i} value={genre}>
                                        {genre}
                                    </option>
                                ))
                            }

                        </select>
                        {
                            genreHelp &&

                            <small id="genreHelp" className="form-text text-danger">
                                {genreHelp}
                            </small>
                        }
                    </div>

                    {/* SUBMIT BTN */}
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Aggiungi
                    </button>
                </form>

                <div className="filters d-flex flex-row gap-2">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Cerca per titolo..."
                            aria-label="searchbar"
                            aria-describedby="basic-addon1"

                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <span className="input-group-text" id="basic-addon1">
                            <i className="bi bi-search"></i>
                        </span>
                    </div>

                    <div className="w-50 mb-3">
                        <select
                            className="form-select form-select"
                            aria-describedby="genreHelp"

                            value={selectedGenre}
                            onChange={(e) => setSelectedGenre(e.target.value)}
                        >
                            <option value="">Tutti i generi</option>
                            {
                                moviesGenres.map((genre, i) => (
                                    <option key={i} value={genre}>
                                        {genre}
                                    </option>
                                ))
                            }

                        </select>
                    </div>
                </div>

                <div className="movies-list row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                    {
                        showedMovies.map((movie, i) => (
                            <div key={i} className="col mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <span>{movie.genre}</span>
                                        <h3>{movie.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main >
    );
}