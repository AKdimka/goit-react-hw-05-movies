import { MovieItem } from './MovieItem';


export const MovieList = ({ movies }) => {
	console.log(movies);
	return < ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none' }}>
		{movies.map(({ id, title, poster_path, name }) =>
			<MovieItem
				key={id}
				id={id}
				movieTitle={title ? title : name}
				poster={poster_path} />
		)}
	</ ul>
}

