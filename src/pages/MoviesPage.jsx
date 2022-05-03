import { useState } from "react";
import { MovieList } from "../components/MoviesList/MovieList";


export const MoviesPage = () => {
	const [movies, setMovies] = useState([]);
	const [query, setQuery] = useState('moon');

	const handleSubmit = e => {
		e.preventDefault();

		const API_KEY = '2fcef87760cac0a14e527e71c6ea2c67';
		fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
			.then(r => r.json())
			.then(movies => setMovies(movies.results))
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" value={query} onChange={e => setQuery(e.target.value)} />
				<button type="submit">Search</button>
			</form>
			{movies.length > 0 && <MovieList movies={movies} />}
		</>
	)
}