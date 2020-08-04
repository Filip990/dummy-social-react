import styled from "styled-components";

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0 1;
	border: 1px solid;
	padding: 1em;
	margin-bottom: 1em;
`;

export const CardHeading = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1em;
	padding: 0.5em;
	border-bottom: 1px solid #e8d8d8;
`;

export const UserName = styled.div`
	padding: 0.5em;
`;

export const Name = styled.div`
	font-weight: bolder;
`;

export const Email = styled.span`
	color: grey;
`;

export const UserImg = styled.img`
	border-radius: 50%;
	width: 3em;
`;

export const PostImg = styled.img`
	width: 20em;
	height: 20em;
`;

export const PostContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Tags = styled.div`
	align-self: flex-start;
`;

export const Tag = styled.p`
	color: white;
	background: #6a52ef;
	font-weight: bolder;
	padding: 2px 10px;
	width: auto;
	border-radius: 12px;
	display: inline-block;
	font-size: 12px;
	margin-right: 1em;
`;

export const Details = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid #e8d8d8;
	border-width: 1px 0;
	padding: 0.5em;
`;
