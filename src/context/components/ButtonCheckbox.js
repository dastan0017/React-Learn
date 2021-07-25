import React, { useContext, useState } from "react";
import { ThemeContext } from "../Context";

export const ButtonCheckbox = (props) => {
	const theme = useContext(ThemeContext);
	const [checked, setChecked] = useState(true);

	const handleCheck = () => {
		setChecked(!checked);

		props.onCheck(checked);
	};

	return (
		<div className="checkbox_btn">
			<input
				type="checkbox"
				className="checkbox"
				id="checkbox"
				value={checked}
				onChange={handleCheck}
			/>
			<label
				for="checkbox"
				className="label"
				style={{ backgroundColor: `${theme.button.background}` }}
			>
				<i class="fa fa-moon-o" aria-hidden="true"></i>
				<i className="fas fa-sun"></i>
				<div className="ball" style={{ backgroundColor: "white" }}></div>
			</label>
		</div>
	);
};
