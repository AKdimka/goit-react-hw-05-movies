import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link/* , Routes, Route  */ } from "react-router-dom";
/* import { Cast } from '../pages/Cast';
import { Reviews } from '../pages/Reviews'; */

export const MovieDetailsPage = () => {
	const [details, setDetails] = useState({});
	const { movieId } = useParams();

	useEffect(() => {
		const API_KEY = '2fcef87760cac0a14e527e71c6ea2c67';

		fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
			.then(r => r.json())
			.then(det => setDetails(det))
	}, [movieId])

	const { poster_path, title, vote_average, overview, genres } = details;

	return (
		<>
			<div style={{ display: 'flex' }}>
				<div >
					{poster_path && <img
						src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
						height="300" width="200"
						alt={`${title} poster`} />}
				</div>
				<div>
					<h2>{title}</h2>
					<p>User Score: <span>{vote_average}</span></p>
					<h3>Overview</h3>
					<p>{overview}</p>
					<h3>Genres</h3>
					{genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
				</div>
			</div >
			<hr />
			<div>
				<ul>
					<li>
						<Link to={`/movies/${movieId}/cast`}>Cast</Link>
					</li>
					<li>
						<Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
					</li>
				</ul>
				<hr />
			</div>

			{/* 	<div>
				<Routes>
					<Route path={`/movies/${movieId}/cast`} element={<Cast />} />
					<Route path={`/movies/${movieId}/reviews`} element={<Reviews />} />
				</Routes>
			</div> */}
		</>
	)
}