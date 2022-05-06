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
  background-color:red;
  color:#000;
  font-weight:600;
  border-radius:15px;
	:hover{
		background-color:darkred
	}
`