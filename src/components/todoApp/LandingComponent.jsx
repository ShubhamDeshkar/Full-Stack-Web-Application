import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
	render() {
		return (
			<>
				<h1 className="display-3 text-center mb-4">Welcome to Remind.ly!</h1>
				<h2
					className="display-5 text-center mb-4"
					style={{ fontWeight: "normal" }}
				>
					An app that helps you keep track of your daily, weekly or monthly{" "}
					<br />
					goals
				</h2>
				<div className="container" style={{ fontSize: 25, marginBottom: 30 }}>
					Don't worry, they are safe with us.
				</div>
				<div className="container" style={{ width: 300 }}>
					<Link to="/login" style={{ color: "white" }}>
						<button
							className="btn btn-success"
							style={{ width: 100, float: "left" }}
						>
							Login
						</button>
					</Link>
					<Link to="/register">
						<button
							className="btn btn-danger"
							style={{ width: 100, float: "right" }}
						>
							Register
						</button>
					</Link>
				</div>
				<div style={{ fontSize: 25 }}> OR </div>
			</>
		);
	}
}

export default LandingPage;
