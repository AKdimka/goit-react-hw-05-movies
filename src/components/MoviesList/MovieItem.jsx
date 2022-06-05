import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import {
	MovieCard,
	CustomLink,
	MovieText,
	MovieTitle,
	MovieVote,
	MovieImg,
} from './MovieItem.styled';

export const MovieItem = ({ id, movieTitle, poster, vote_average, vote_count }) => {
	const location = useLocation();

	return (
		<MovieCard>
			<CustomLink to={`/movies/${id}`} state={{ from: location }}>
				<div>
					<MovieImg
						src={`https://image.tmdb.org/t/p/w500/${poster}`}
						alt={`${movieTitle} poster`} />
				</div>

				<MovieText>
					<MovieTitle>{movieTitle}</MovieTitle>
					<MovieVote>
						<p>Voted:{vote_count}</p>
						<p>Average:{vote_average}</p>
					</MovieVote>
				</MovieText>
			</CustomLink>
		</MovieCard>
	)
}

MovieItem.propTypes = {
	id: PropTypes.number.isRequired,
	movieTitle: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	vote_average: PropTypes.number.isRequired,
	vote_count: PropTypes.number.isRequired,
}