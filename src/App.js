import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Context } from "./context/Context";
import "./App.css";

export default function App() {
	return (
		<div className="container">
			<Router>
				<div className="navbar">
					<div className="narbar-item">
						<h3>
							<Link
								style={{ color: "inherit", textDecoration: "inherit" }}
								to="/"
							>
								Home
							</Link>
						</h3>
					</div>
					<div className="narbar-item">
						<h3>
							<Link
								style={{ color: "inherit", textDecoration: "inherit" }}
								to="/context"
							>
								Context
							</Link>
						</h3>
					</div>
				</div>

				<div className="presentation_container">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/context">
							<Context />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}
