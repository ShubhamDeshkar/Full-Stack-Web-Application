import React, { Component } from "react";
import { Link } from "react-router-dom";

class RegisterComponent extends Component {
	render() {
		return (
			<>
				<h1 className="display-4 text-center mb-4">We are glad you chose us</h1>
				<div className="container">
					<h4 style={{ fontWeight: "normal", marginTop: 50 }}>Register here</h4>
					<input
						style={{
							marginTop: 5,
							width: 150,
							height: 40,
							border: "none",
							borderRadius: 4,
							paddingLeft: 10,
							marginRight: 3
						}}
						type="text"
						name="email"
						placeholder="First Name"
					/>
					<input
						style={{
							marginTop: 5,
							width: 150,
							height: 40,
							border: "none",
							borderRadius: 4,
							paddingLeft: 10,
							marginLeft: 3
						}}
						type="text"
						name="email"
						placeholder="Last Name"
					/>{" "}
					<br />
					<input
						style={{
							marginTop: 5,
							width: 306,
							height: 40,
							border: "none",
							borderRadius: 4,
							paddingLeft: 10
						}}
						type="text"
						name="email"
						placeholder="Email Address"
					/>{" "}
					<br />
					<input
						style={{
							marginTop: 5,
							width: 306,
							height: 40,
							border: "none",
							borderRadius: 4,
							paddingLeft: 10
						}}
						type="password"
						name="password"
						placeholder="Password"
					/>{" "}
					<br />
					<input
						style={{
							marginTop: 5,
							width: 306,
							height: 40,
							border: "none",
							borderRadius: 4,
							paddingLeft: 10
						}}
						type="password"
						name="password"
						placeholder="Confirm Password"
					/>{" "}
					<br />
					<button
						style={{ width: 306, fontSize: 18 }}
						className="btn btn-success mt-3"
					>
						Sign up
					</button>
					<div style={{ color: "rgb(128, 128, 128)", marginTop: 4 }}>
						Have an account? <Link to="/login">Sign in</Link>{" "}
					</div>
				</div>
				<div>Not functional yet! (Under construction)</div>
			</>
		);
	}
}

export default RegisterComponent;
