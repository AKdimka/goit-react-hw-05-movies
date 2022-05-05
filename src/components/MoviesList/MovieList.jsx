import PropTypes from "prop-types";
import { MovieItem } from './MovieItem';
import { MoviesList } from './MovieList.styled';

export const MovieList = ({ movies }) => {
	return (
		<MoviesList >
			{movies.map(({ id, title, poster_path, name, vote_average, vote_count }) =>
				<MovieItem
					key={id}
					id={id}
					movieTitle={title ? title : name}
					poster={poster_path}
					vote_average={vote_average}
					vote_count={vote_count} />
			)}
		</MoviesList>
	)
}

MovieList.propTypes = {
	movies: PropTypes.arrayOf(PropTypes.object)
}