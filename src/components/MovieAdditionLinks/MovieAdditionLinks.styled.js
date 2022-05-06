import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinksWrapper = styled.div`
`
export const LinksList = styled.ul`
list-style: none;
`
export const LinkItem = styled.li`
`
export const AdditionNavLink = styled(NavLink)`
display: inline-block;
font-size: 23px;
font-weight: 500;
color: black;
text-decoration: none;
padding: 10px;
&.active{
	color: red;
}
:hover{
	color: darkred;
}
`