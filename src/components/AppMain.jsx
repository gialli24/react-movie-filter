import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Select from "./Select";
import InputRightIcon from "./InputRightIcon";
import Button from "./Button";
import FormSelect from "./FormSelect";
import FormInput from "./FormInput";

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

                    <FormInput label={"Titolo"} value={newTitle} setValue={setNewTitle} placeholder={"Avatar 2"} help={titleHelp} />

                    <FormSelect label={"Genere"} value={newGenre} setValue={setNewGenre} options={moviesGenres} placeholder={"Nessun genere selezionato"} help={genreHelp} />

                    <Button type={"submit"} style={"primary"} label={"Aggiungi"} />
                </form>

                <div className="filters d-flex flex-row gap-2">
                    <div className="input-group mb-3">
                        <InputRightIcon value={searchValue} setValue={setSearchValue} placeholder={"Cerca per titolo ..."} icon={"search"} />
                    </div>

                    <div className="w-50 mb-3">
                        <Select value={selectedGenre} setValue={setSelectedGenre} options={moviesGenres} placeholder={"Tutti i generi"} />
                    </div>
                </div>

                <div className="movies-list row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                    {
                        showedMovies.map((movie, i) => (
                            <MovieCard key={i} title={movie.title} genre={movie.genre} />
                        ))
                    }
                </div>
            </div>
        </main >
    );
}