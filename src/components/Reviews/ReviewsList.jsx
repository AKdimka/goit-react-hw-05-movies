import PropTypes from "prop-types";
import { Review } from "./Review";
import { List } from "./ReviewsList.styled";

export const RewiewsList = ({ reviews }) => {
	return (
		<List>
			{reviews && reviews.map(({ id, author, content }) => {
				return (
					<Review
						key={id}
						author={author}
						text={content} />
				)
			})}
		</List>
	)
}

RewiewsList.propTypes = {
	reviews: PropTypes.arrayOf(PropTypes.object),
}