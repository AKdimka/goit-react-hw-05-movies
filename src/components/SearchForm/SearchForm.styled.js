import styled from "styled-components";

export const Form = styled.form`
	display:flex;
	flex-direction: row;
	justify-content: center;
	color: inherit;
	border-radius: 4px;
`
export const SearchInput = styled.input`
	color: white;
	letter-spacing: 1px;
	font-size: 17px;
	width: 50%;
	padding:5px;
  border-radius:10px;
	border: 2px solid #eee;
	background: inherit;
	
	:focus{
		outline: none;
		border-color: darkred;
	}
`
export const SearchButton = styled.button`
	margin-left: 15px;
	cursor: pointer;
	padding:10px;
  border:none;
  background-color:rgb(139,0,0);
  color:#000;
  font-weight:600;
  border-radius:15px;
	:hover{
		background-color: rgb(255,0,0);
		box-shadow:
			0px 1px 1px rgba(255, 0, 0, 0.2),
			0px 4px 4px rgba(255, 0, 0, 0.25),
			1px 4px 6px rgba(255, 0, 0, 0.33);
	}
`