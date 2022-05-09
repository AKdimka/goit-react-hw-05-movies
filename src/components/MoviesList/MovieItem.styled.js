import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieCard = styled.li`
	max-width: 300px;
	margin: 5px;

	background-color: rgba(0, 0, 0, 0.07);
	border: 1px solid #eeeeee;
	border-top: none;
	border-radius: 10px;
	overflow: hidden;
	:hover{
		box-shadow:
		0px 1px 1px rgba(255, 0, 0, 0.12),
		0px 4px 4px rgba(255, 0, 0, 0.16),
		1px 4px 6px rgba(255, 0, 0, 0.26);
	}
`
export const CustomLink = styled(Link)`
	display: flex;
	flex-direction: column;
	color: #000;
	text-decoration: none;
`
export const MovieImg = styled.img`
	display: block;
	width: 100%;
	height: 450px;
`
export const MovieText = styled.div`
	padding-top: 5px;
	padding-bottom: 5px;
	padding-left: 5px;
	padding-right: 5px;
`
export const MovieTitle = styled.h3`
	width: 250px;
	font-weight: 700;
	font-size: 18px;
`
export const MovieVote = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`