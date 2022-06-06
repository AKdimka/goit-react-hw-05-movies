import { useState, useEffect } from "react";
import getSearchMovies from 'API/get-search-movies';
import { MovieList } from "../components/MoviesList/MovieList";
import { SearchForm } from "components/SearchForm/SearchForm";
import { useLocation } from "react-router-dom";

export default function MoviesPage() {
	const { search } = useLocation();
	const query = new URLSearchParams(search).get('query') ?? '';

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		if (query !== '') {
			getSearchMovies(query).then(({ results }) => {

				setMovies(results);
			});
		}
	}, [query]);

	return (
		<>
			<SearchForm />
			{movies.length > 0 && <MovieList movies={movies} />}
		</>
	)
}