import { useState } from "react";

export default function AppMain({ films }) {

    const [filteredFilms, setFilteredFilms] = useState(films);

    const genres = [];
    films.filter(film => {
        if (!genres.includes(film.genre)) {
            genres.push(film.genre)
        }
    })

    function filterByGenre(e) {
        const selectedGenre = e.target.value;

        if (selectedGenre) {
            setFilteredFilms(
                films.filter(film => film.genre === selectedGenre)
            )
        } else {
            setFilteredFilms(films)
        }
    }

    return (
        <main>
            <div className="filters">
                <select onChange={(e) => filterByGenre(e)}>
                    <option value="" >Seleziona un genere</option>
                    {
                        genres.map((genre, i) => (
                            <option key={i} value={genre} >{genre}</option>
                        ))
                    }
                </select>
            </div>

            <div className="films-list">
                <ul>
                    {
                        filteredFilms.map((film, i) => (
                            <li key={i}>{film.title} - {film.genre}</li>
                        ))
                    }
                </ul>
            </div>
        </main >
    );
}