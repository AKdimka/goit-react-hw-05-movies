import { useState, useEffect } from "react";
import { MovieList } from "components/MoviesList/MovieList";

export default function HomePage() {
	const [trendingMovies, setTrendingMovies] = useState([]);

	useEffect(() => {
		const API_KEY = '2fcef87760cac0a14e527e71c6ea2c67';
		fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
			.then(r => r.json())
			.then(movies => setTrendingMovies(movies.results))
	}, [])

	return (
		trendingMovies && <MovieList movies={trendingMovies} />
	)
}