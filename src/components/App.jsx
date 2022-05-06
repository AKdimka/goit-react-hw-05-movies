import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Loader/Loader";

import { Layout } from "./Layout/Layout";

const HomePage = lazy(() => import('../pages/HomePage.jsx' /* webpackChunkName:"home-page" */));
const MoviesPage = lazy(() => import('../pages/MoviesPage.jsx'/* webpackChunkName:"movie-page" */));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage.jsx' /* webpackChunkName:"movie-details-page" */));
const Cast = lazy(() => import('../pages/Cast.jsx' /* webpackChunkName:"cast" */));
const Reviews = lazy(() => import('../pages/Reviews.jsx' /* webpackChunkName:"review" */));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage.jsx' /* webpackChunkName:"not-found-page" */));

export const App = () => {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path='movies' element={<MoviesPage />} />

						<Route path='movies/:movieId' element={<MovieDetailsPage />}>
							<Route path='cast' element={<Cast />} />
							<Route path='reviews' element={<Reviews />} />
						</Route>

						<Route path='*' element={<NotFoundPage />} />
					</Route>
				</Routes>
			</Suspense>
		</>
	);
};
