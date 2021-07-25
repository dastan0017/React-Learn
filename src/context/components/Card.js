import React, { useContext } from "react";
import { ThemeContext } from "../Context";

export const Card = (props) => {
	const theme = useContext(ThemeContext);
	return (
		<div
			className="card"
			style={{
				backgroundColor: `${theme.card.background}`,
				color: `${theme.card.textColor}`,
			}}
		>
            <h2>Card Component</h2>
			<h3>{props.title}</h3>
			<p>{props.text}</p>
		</div>
	);
};
