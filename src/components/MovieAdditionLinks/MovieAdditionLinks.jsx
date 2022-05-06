import {
	LinksWrapper,
	LinksList,
	LinkItem,
	AdditionNavLink
} from "./MovieAdditionLinks.styled";

export const MovieAdditionLinks = () => {
	return (
		<LinksWrapper>
			<LinksList style={{ listStyle: 'none' }}>
				<LinkItem>
					<AdditionNavLink to={'cast'}>Cast</AdditionNavLink>
				</LinkItem>
				<LinkItem>
					<AdditionNavLink to={'reviews'}>Reviews</AdditionNavLink>
				</LinkItem>
			</LinksList>
			<hr />
		</LinksWrapper>)
}