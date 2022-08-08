import { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { MovieContent } from "components/MovieContent/MovieContent";
import { MovieAdditionLinks } from "components/MovieAdditionLinks/MovieAdditionLinks";
import { Loader } from "components/Loader/Loader.jsx";


const Cast = lazy(() => import('../pages/Cast.jsx' /* webpackChunkName:"cast" */));
const Reviews = lazy(() => import('../pages/Reviews.jsx' /* webpackChunkName:"review" */));

export default function MovieDetailsPage() {
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

			<MovieAdditionLinks />

			<div>
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route path='/cast' element={<Cast />} />
						<Route path='/reviews' element={<Reviews />} />
					</Routes>
				</Suspense>
			</div>
		</>
	)
}