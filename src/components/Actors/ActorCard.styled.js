import styled from "styled-components";

export const ActorItem = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	border: 1px solid #fff;
	border-radius: 5px;
	max-width: 120px;
	padding: 5px;
	margin: 5px;
	word-wrap: break-word;
`
export const ActorImg = styled.img`
max-width: 120px;
max-height: 180px;
border-radius: 5px;
overflow: hidden;
`
export const NoImg = styled.div`
width: 120px;
height: 180px;
background-color:#fff; 
border-radius: 5px;
overflow: hidden;
`
export const NoImgSimvol = styled.span`
display: block;
text-align: center;
font-size: 100px;
font-weight: 700;
`
export const NoImgText = styled.p`
text-align: center;
font-size: 15px;
font-weight: 700;
`

export const ItemTextWrap = styled.div`
display: flex;
flex-direction: column;
`
export const ActorName = styled.h3`
font-weight: 700;
`
export const ActorRole = styled.h3`
font-weight: 500;
`