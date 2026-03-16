import { useEffect, useState } from "react";

export default function AppMain({ films }) {

    const [filteredFilms, setFilteredFilms] = useState(films);
    const [selectedGenre, setSelectedGenre] = useState("");

    const genres = [];
    films.filter(film => {
        if (!genres.includes(film.genre)) {
            genres.push(film.genre);
        }
    })

    useEffect(() => {

        if (selectedGenre) {
            setFilteredFilms(
                films.filter(film => film.genre === selectedGenre)
            )
        } else {
            setFilteredFilms(films);
        }

    }, [selectedGenre])

    return (
        <main>
            <div className="filters">
                <select onChange={(e) => setSelectedGenre(e.target.value)}>
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