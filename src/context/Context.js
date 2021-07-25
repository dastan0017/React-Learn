import React, { useState } from "react";
import { Cards } from "./components/Cards";
import { ButtonCheckbox } from "./components/ButtonCheckbox";
import "./Context.css";
import { Title } from "./components/Title";

const themes = {
	light: {
		button: { background: "#123670" },
		fullContent: { background: "white" },
		cardContainer: { background: "#e5e8da", textColor: "black" },
		card: { background: "#f2e0aa", textColor: "black" },
		title: { textColor: "blueviolet" },
	},
	dark: {
		button: { background: "#eb4034" },
		fullContent: { background: "#0e203d" },
		cardContainer: { background: "#12206b", textColor: "white" },
		card: { background: "#5668b8", textColor: "white" },
		title: { textColor: "white" },
	},
};

export const ThemeContext = React.createContext(themes.light);

export const Context = () => {
	const [theme, setTheme] = useState(themes.light);

	const handleCheck = (isChecked) => {
		if (isChecked) {
			setTheme(themes.dark);
		} else {
			setTheme(themes.light);
		}
	};

	return (
		<ThemeContext.Provider value={theme}>
			<div
				className="context_container"
				style={{ backgroundColor: `${theme.fullContent.background}` }}
			>
				<Title />
				<ButtonCheckbox onCheck={handleCheck} />
				<Cards />
			</div>
		</ThemeContext.Provider>
	);
};
