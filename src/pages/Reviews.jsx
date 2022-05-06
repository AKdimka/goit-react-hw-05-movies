import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RewiewsList } from "components/Reviews/ReviewsList";

export default function Reviews() {
	const { movieId } = useParams();
	const [reviews, setReviews] = useState();

	useEffect(() => {
		const API_KEY = '2fcef87760cac0a14e527e71c6ea2c67';

		fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
			.then(r => r.json())
			.then(({ results }) => setReviews(results))
	}, [movieId])

	return (
		<>
			<h1>Reviews</h1>
			<RewiewsList reviews={reviews} />
		</>
	)
}