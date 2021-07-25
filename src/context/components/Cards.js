import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../Context";
import { Card } from "./Card";

export const Cards = () => {
	const [posts, setPosts] = useState([]);
	const theme = useContext(ThemeContext);
	useEffect(() => {
		const apiUrl = "http://localhost:5000/posts";
		fetch(apiUrl)
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);

	return (
		<div
			className="cards_container"
			style={{
				backgroundColor: `${theme.cardContainer.background}`,
				color: `${theme.cardContainer.textColor}`,
			}}
		>
			<h2>Cards container Component</h2>
			<div className="cards">
				{posts.map((el) => {
					return <Card title={el.title} text={el.text} />;
				})}
			</div>
		</div>
	);
};
