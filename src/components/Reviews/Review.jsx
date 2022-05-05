import PropTypes from "prop-types";
import {
	ReviewItem,
	ReviewAuthor,
	ReviewIText
} from "./Review.styled";

export const Review = ({ author, text }) => {

	return (
		<ReviewItem>
			<ReviewAuthor>
				{author}
			</ReviewAuthor>
			<ReviewIText>
				{text}
			</ReviewIText>
		</ReviewItem>
	)
}
Review.propTypes = {
	author: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}