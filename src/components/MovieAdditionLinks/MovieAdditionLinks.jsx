import { useLocation } from "react-router-dom";
import {
	LinksWrapper,
	LinksList,
	LinkItem,
	AdditionNavLink
} from "./MovieAdditionLinks.styled";

export const MovieAdditionLinks = () => {
	const location = useLocation();

	return (
		<LinksWrapper>
			<LinksList style={{ listStyle: 'none' }}>
				<LinkItem>
					<AdditionNavLink to={'cast'} state={location.state}>Cast</AdditionNavLink>
				</LinkItem>
				<LinkItem>
					<AdditionNavLink to={'reviews'} state={location.state}>Reviews</AdditionNavLink>
				</LinkItem>
			</LinksList>
			<hr />
		</LinksWrapper>)
}