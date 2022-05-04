import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Cast = () => {
	const [cast, setCast] = useState(null);
	const { movieId } = useParams();


	useEffect(() => {
		const API_KEY = '2fcef87760cac0a14e527e71c6ea2c67';

		fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
			.then(r => r.json())
			.then(({ cast }) => setCast(cast))
	}, [movieId])

	console.log(cast);
	return (
		<>
			<h2>Cast</h2>
			<ul>
				{cast && cast.map(({ id, name, character, profile_path }) => {
					return (
						<li key={id} style={{ border: '1px solid white' }}>
							{profile_path && <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={profile_path} style={{ maxWidth: '100px', minHeight: '150px' }} />}
							<h3>{name}</h3>
							<h3>{character}</h3>
						</li>
					)
				})}
			</ul>
		</>
	)
}