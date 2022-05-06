import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ActorList } from "components/Actors/ActorList";

export default function Cast() {
	const [cast, setCast] = useState(null);
	const { movieId } = useParams();

	useEffect(() => {
		const API_KEY = '2fcef87760cac0a14e527e71c6ea2c67';

		fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
			.then(r => r.json())
			.then(({ cast }) => setCast(cast))
	}, [movieId])

	return (
		<>
			<h1>Cast</h1>
			<ActorList cast={cast} />
		</>
	)
}