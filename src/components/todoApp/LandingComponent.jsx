import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
	render() {
		return (
			<>
				<h1 className="display-3 text-center mb-4">Welcome to Todos App!</h1>
				<h1
					className="display-5 text-center mb-4"
					style={{ fontWeight: "normal" }}
				>
					Start managing your daily tasks in an effecient way
					<br />
					Today
				</h1>
				<h4 style={{ marginBottom: 30 }}>
					Don't worry, your daily personal goals are safe with us.
				</h4>
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
