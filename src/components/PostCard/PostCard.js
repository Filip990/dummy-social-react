import React from "react";

import {
	Card,
	CardHeading,
	UserImg,
	UserName,
	Name,
	Email,
	PostImg,
	Tags,
	Tag,
	Details,
	PostContent,
} from "./PostCard.styled";

const PostCard = ({ id, image, likes, owner, publishDate, tags, text }) => {
	const { email, firstName, lastName, picture } = owner;

	return (
		<Card>
			<CardHeading>
				<UserImg src={picture} alt={firstName} />
				<UserName>
					<Name>{firstName + " " + lastName}</Name>
					<Email>{email}</Email>
				</UserName>
			</CardHeading>
			<PostContent>
				<PostImg src={image} alt={firstName} />
				<Tags>
					{tags.map((tag) => (
						<Tag key={tag}>{tag}</Tag>
					))}
				</Tags>
				<p>{text}</p>
			</PostContent>
			<Details>
				<span role="img" aria-label="likes">
					&#10084;&#65039;{likes} Likes
				</span>
				<span>{new Date(publishDate).toLocaleString()}</span>
			</Details>
		</Card>
	);
};

export default PostCard;
