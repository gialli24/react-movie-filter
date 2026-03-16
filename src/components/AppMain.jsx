export default function AppMain({ films }) {

    let genres = [];
    films.filter(film => {
        if (!genres.includes(film.genre)) {
            genres.push(film.genre)
        }
    })

    return (
        <main>
            <div className="filters">
                <select name="" id="">
                    {
                        genres.map(genre => (
                            <option value={genre}>{genre}</option>
                        ))
                    }
                </select>
            </div>

            <div className="films-list">
                <ul>
                    {
                        films.map((film, i) => (
                            <li key={i}>{film.title} - {film.genre}</li>
                        ))
                    }
                </ul>
            </div>
        </main>
    );
}