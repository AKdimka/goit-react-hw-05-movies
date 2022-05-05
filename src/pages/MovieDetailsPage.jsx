import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink, Routes, Route } from "react-router-dom";
import { Cast } from '../pages/Cast';
import { Reviews } from '../pages/Reviews';
import { MovieContent } from "components/MovieContent/MovieContent";

export const MovieDetailsPage = () => {
	const [details, setDetails] = useState({});
	const { movieId } = useParams();

	useEffect(() => {
		const API_KEY = '2fcef87760cac0a14e527e71c6ea2c67';

		fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
			.then(r => r.json())
			.then(det => setDetails(det))
	}, [movieId])

	return (
		<>
			<MovieContent details={details} />

			<div>
				<ul style={{ listStyle: 'none' }}>
					<li>
						<NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
					</li>
					<li>
						<NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
					</li>
				</ul>
				<hr />
			</div>

			<div>
				<Routes>
					<Route path={`cast`} element={<Cast />} />
					<Route path={`reviews`} element={<Reviews />} />
				</Routes>
			</div>
		</>
	)
}