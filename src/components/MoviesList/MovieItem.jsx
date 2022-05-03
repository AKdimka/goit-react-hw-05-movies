import { Link } from "react-router-dom";

export const MovieItem = ({ id, movieTitle, poster }) => {
	return (
		<li style={{ maxWidth: '300px', minHeight: '230px', margin: '15px' }}>
			<Link to={`/movies/${id}`} style={{ color: 'black', textDecoration: 'none' }}>
				<article>
					<div >
						<img style={{ display: 'block', minHeight: '300px' }}
							src={`https://image.tmdb.org/t/p/w500/${poster}`}
							height="300" width="200"
							alt={`${movieTitle} poster`} />
					</div>
					<div>
						<h4 >{movieTitle}</h4>
						<p></p>
					</div>
				</article>
			</Link>
		</li>
	)
}