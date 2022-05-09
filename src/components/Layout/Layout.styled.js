import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
`
export const Header = styled.header`
	background-color:rgba(0,0,0,0.5);
	padding: 10px;
	border-bottom:1px solid rgb(255,255,255);
`
export const Main = styled.main`
	padding: 15px;
	min-height: 750px;
`
export const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-around
`
export const CastomNavLink = styled(NavLink)`
	text-decoration: none;
	font-size: 25px;
	font-weight: 500;
	padding: 10px;
	color: #000;

	&.active{
		color: rgb(139, 0, 0);
		text-decoration:underline;
	}
	:hover{
		color: rgb(255, 0, 0);}
`
export const Footer = styled.footer`
	display: flex;
	justify-content: center;
	padding: 20px;
	background-color:rgba(0,0,0,0.5);
	border-top:1px solid rgb(255,255,255);
`