import { Route, Routes } from "react-router-dom";
import { HomePage } from '../pages/HomePage';
import { MoviesPage } from '../pages/MoviesPage';
import { MovieDetailsPage } from '../pages/MovieDetailsPage';
import { NotFoundPage } from "../pages/NotFoundPage";
import { Cast } from '../pages/Cast';
import { Reviews } from '../pages/Reviews';

import { Layout } from "./Layout/Layout";

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='movies' element={<MoviesPage />} />

					<Route path='movies/:movieId/*' element={<MovieDetailsPage />} />

					<Route path={`/movies/:movieId/cast`} element={<Cast />} />
					<Route path={`/movies/:movieId/reviews`} element={<Reviews />} />

					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
};
