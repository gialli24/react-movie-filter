import { useState } from "react";

export default function AppMain({ films }) {

    const [filteredFilms, setFilteredFilms] = useState(films);

    let genres = [];
    films.filter(film => {
        if (!genres.includes(film.genre)) {
            genres.push(film.genre)
        }
    })

    function selectGenre(e) {
        const genre = e.target.value;

        if (genre) {
            setFilteredFilms(
                films.filter(film => film.genre === genre)
            )
        } else {
            setFilteredFilms(films)
        }
    }

    return (
        <main>
            <div className="filters">
                <select onChange={(e) => selectGenre(e)}>
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