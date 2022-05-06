import PropTypes from "prop-types";
import {
	ActorItem,
	ActorImg,
	NoImg,
	NoImgSimvol,
	NoImgText,
	ItemTextWrap,
	ActorName,
	ActorRole
} from "./ActorCard.styled";

export const ActorCard = ({ img, name, role }) => {
	return (
		<ActorItem>
			{img ?
				<ActorImg src={`https://image.tmdb.org/t/p/w500/${img}`} alt={name} />
				:
				<NoImg>
					<NoImgSimvol>?</NoImgSimvol>
					<NoImgText>'Oops no photo'</NoImgText>
				</NoImg>}
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