import PropTypes from "prop-types";
import { useLocation } from 'react-router-dom';
import { Wrapper, ImgWrapper, Poster, TextWrapper, GenresList } from "./MovieContent.styled";
import { GoBackBtn } from "components/Btn/GoBackBtn";

export const MovieContent = ({ details }) => {
	const { poster_path, title, vote_average, overview, genres } = details;
	const location = useLocation();

	return (
		<>
			<GoBackBtn location={location} />
			<Wrapper >
				<ImgWrapper >
					{poster_path && <Poster
						src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
						alt={`${title} poster`} />}
				</ImgWrapper>
				<TextWrapper>
					<h2>{title}</h2>
					<p>User Score: <span>{vote_average}</span></p>
					<h3>Overview</h3>
					<p>{overview}</p>
					<h3>Genres</h3>
					<GenresList>
						{genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
					</GenresList>
				</TextWrapper>
			</Wrapper >
		</>
	)
}

MovieContent.propTypes = {
	details: PropTypes.object.isRequired,
}