import { useState, useEffect } from "react";
import { MovieList } from "../components/MoviesList/MovieList";
import { SearchForm } from "components/SearchForm/SearchForm";

export default function MoviesPage() {
	const [movies, setMovies] = useState([]);
	const [query, setQuery] = useState('');

	useEffect(() => {
		const API_KEY = '2fcef87760cac0a14e527e71c6ea2c67';
		if (query !== '') {
			fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
				.then(r => r.json())
				.then(movies => setMovies(movies.results))
		}
	}, [query])

	return (
		<>
			<SearchForm setQuery={setQuery} />
			{movies.length > 0 && <MovieList movies={movies} />}
		</>
	)
}