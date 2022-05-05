import PropTypes from "prop-types";
import { ActorItem, ActorImg, ItemTextWrap, ActorName, ActorRole } from "./ActorCard.styled";

export const ActorCard = ({ img, name, role }) => {
	return (
		<ActorItem>
			{img ? <ActorImg src={`https://image.tmdb.org/t/p/w500/${img}`} alt={name} /> : 'Oops no photo'}
			<ItemTextWrap>
				<ActorName>{name}</ActorName>
				<ActorRole>{role}</ActorRole>
			</ItemTextWrap>
		</ActorItem>
	)
}

ActorCard.propTypes = {
	img: PropTypes.string,
	name: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
}