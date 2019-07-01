import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import { Link } from "react-router-dom";

export default class LoginComponent extends Component {
	constructor() {
		super();
		this.state = {
			username: "",
			password: "",
			hasLoginFailed: false,
			showSuccessMessage: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	// var input = document.getElementById("myInput");
	// input.addEventListener("keyup", function(event) {
	//   if (event.keyCode === 13) {
	//    event.preventDefault();
	//    document.getElementById("myBtn").click();
	//   }
	// });

	handleKeyPress(event) {
		console.log(event.keyCode);
		if (event.keyCode === 13) {
			this.handleLoginClick();
		}
	}

	handleLoginClick() {
		AuthenticationService.executeBasicAuthenticationService(
			this.state.username,
			this.state.password
		)
			.then(response => {
				AuthenticationService.registerSuccessfulLogin(
					this.state.username,
					this.state.password
				);
				console.log(response.data.message);
				this.props.history.push(`/welcome/${this.state.username}`);
			})
			.catch(error => {
				this.setState({
					hasLoginFailed: true
				});
			});
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		return (
			<div>
				<h1 className="display-4 text-center mb-4">Glad to see you again</h1>
				<div
					className="container"
					style={{ marginTop: 50 }}
					onKeyUp={this.handleKeyPress}
				>
					<h4 style={{ fontWeight: "normal", marginTop: 50 }}>Login</h4>
					<input
						style={{
							marginTop: 10,
							width: 356,
							height: 40,
							border: "none",
							borderRadius: 4,
							paddingLeft: 10
						}}
						autoFocus
						type="text"
						name="username"
						placeholder="Username"
						onChange={this.handleChange}
					/>{" "}
					<br />
					<input
						style={{
							marginTop: 10,
							width: 356,
							height: 40,
							border: "none",
							borderRadius: 4,
							paddingLeft: 10
						}}
						type="password"
						name="password"
						placeholder="Password"
						onChange={this.handleChange}
					/>{" "}
					<br />
					<button
						style={{ width: 356, fontSize: 18 }}
						className="btn btn-success mt-3"
						onClick={this.handleLoginClick}
					>
						Login
					</button>
					<div style={{ marginTop: 6 }}>
						<Link to="/forgot" style={{ color: "rgb(128,128,128)" }}>
							Forgot Password?
						</Link>
					</div>
					<div style={{ marginTop: 3, color: "rgb(128,128,128)" }}>
						Don't have an account yet?{" "}
						<Link to="/register">Create an account</Link>
					</div>
					{this.state.hasLoginFailed && (
						<div className="alert alert-danger mt-2">Invalid Credentials</div>
					)}
				</div>
			</div>
		);
	}
}
