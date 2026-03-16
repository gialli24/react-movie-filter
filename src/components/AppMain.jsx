import { useEffect, useState } from "react";

export default function AppMain({ films }) {

    const [filteredFilms, setFilteredFilms] = useState(films);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [searchValue, setSearchValue] = useState("");

    const genres = [];
    films.filter(film => {
        if (!genres.includes(film.genre)) {
            genres.push(film.genre);
        }
    })

    useEffect(() => {

        if (selectedGenre || searchValue != "") {
            let actualFilms = [...films];

            if (selectedGenre) {
                actualFilms = actualFilms.filter(film => film.genre === selectedGenre);
            }

            if (searchValue != "") {
                actualFilms = actualFilms.filter(film => film.title.toLowerCase().includes(searchValue));
            }

            setFilteredFilms(actualFilms);
        } else {
            setFilteredFilms(films)
        }

    }, [selectedGenre, searchValue])

    return (
        <main>
            <div className="filters">
                <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />

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