import styled from "styled-components";

export const GoBack = styled.button`
	display: inline-block;
	padding: 10px;
	margin-bottom: 5px;

	text-decoration: none;
	color: rgb(139, 0, 0);
	background: rgba(0,0,0,0.5);
	border: 1px solid rgb(0,0,0);
	border-radius: 5px;
	:hover{
		color: rgb(255, 0, 0);
		box-shadow:
			0px 1px 1px rgba(255, 0, 0, 0.12),
			0px 4px 4px rgba(255, 0, 0, 0.16),
			1px 4px 6px rgba(255, 0, 0, 0.26);
	}
`