import { Outlet } from "react-router-dom";
import { Wrapper, Header, Main, Nav, CastomNavLink, Footer } from './Layout.styled';


export const Layout = () => {
	return (<>
		<Wrapper>
			<Header>
				<Nav>
					<CastomNavLink
						to='/'>
						Home
					</CastomNavLink>
					<CastomNavLink
						to='/movies'>
						Movies
					</CastomNavLink>
				</Nav>
			</Header>

			<Main>
				<Outlet />
			</Main>

			<Footer>
				Created on React in 2022
			</Footer>
		</Wrapper>
	</>)
}
