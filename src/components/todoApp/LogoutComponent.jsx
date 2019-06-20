import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LogoutComponent extends Component {
	render() {
		return (
			<div>
				<h1 className="display-4 text-center mb-4">
					You are successfully logged out!
				</h1>
				<div className="container" style={{ fontSize: 20 }}>
					Thank you for using our service.
				</div>
				<Link to="/login">
					<button className="btn btn-success mt-3">
						Click here to log back in
					</button>
				</Link>
				<div style={{ marginTop: 6 }}>
					<Link to="/" style={{ color: "rgb(128,128,128)" }}>
						or go to welcome page
					</Link>
				</div>
			</div>
		);
	}
}
