import React, { useContext } from "react";
import { ThemeContext } from "../Context";

export const Title = () => {
	const theme = useContext(ThemeContext);
	return (
		<h2
			style={{
				textAlign: "center",
				color: `${theme.title.textColor} `,
				fontWeight: "bold",
			}}
		>
			Context: Toggle theme App
		</h2>
	);
};
