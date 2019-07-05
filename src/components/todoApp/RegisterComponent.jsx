import React, { Component } from "react";
import { Link } from "react-router-dom";

class RegisterComponent extends Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			isInvalid: false,
			errorMessage: ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.handleOnClick = this.handleOnClick.bind(this);
		this.handleValidation = this.handleValidation.bind(this);
	}

	handleChange(event) {
		console.log(event.target.name + ": " + event.target.value);
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleValidation() {
		console.log("validation called");
		if (this.state.firstName.length < 2) {
			this.setState({
				errorMessage: "First Name cannot be less than 2 chracters"
			});
			return true;
		}
		if (this.state.lastName.length < 2) {
			this.setState({
				errorMessage: "Last Name cannot be less than 2 characters"
			});
			return true;
		}
		if (this.state.password.length < 8) {
			this.setState({
				errorMessage: "Password cannot be less than 8 characters"
			});
			return true;
		}
		if (this.state.password !== this.state.confirmPassword) {
			this.setState({
				errorMessage: "Passwords do not match"
			});
			return true;
		}
		return false;
	}

	handleOnClick(event) {
		console.log("onClick called");
		this.handleValidation();
		console.log("Validation passed");
		console.log(this.state);
	}

	handleKeyUp(event) {
		console.log(event.keyCode);
		if (event.keyCode === 13) {
			console.log("Enter key pressed");
			this.setState(
				{
					isInvalid: this.handleValidation()
				},
				() => {
					!this.state.isInvalid && this.handleOnClick(event);
				}
			);
		}
	}

	render() {
		return (
			<div style={{ minHeight: "100vh" }}>
				<h1 className="display-4 text-center mb-4">We are glad you chose us</h1>
				<div className="container" onKeyUp={this.handleKeyUp}>
					<h4 style={{ fontWeight: "normal", marginTop: 50 }}>Register here</h4>
					<input
						style={{
							marginTop: 5,
							width: 175,
							height: 40,
							border: "none",
							borderRadius: 4,
							paddingLeft: 10,
							marginRight: 3
						}}
						required
						autoFocus
						minLength="2"
						type="text"
						name="firstName"
						placeholder="First Name"
						onChange={this.handleChange}
					/>
					<input
						style={{
							marginTop: 5,
							width: 175,
							height: 40,
							border: "none",
							borderRadius: 4,
							paddingLeft: 10,
							marginLeft: 3
						}}
						minLength="2"
						required
						type="text"
						name="lastName"
						placeholder="Last Name"
						onChange={this.handleChange}
					/>{" "}
					<br />
					<input
						style={{
							marginTop: 5,
							width: 356,
							height: 40,
							border: "none",
							borderRadius: 4,
							paddingLeft: 10
						}}
						required
						type="text"
						name="email"
						placeholder="Email Address"
						onChange={this.handleChange}
					/>{" "}
					<br />
					<input
						style={{
							marginTop: 5,
							width: 356,
							height: 40,
							border: "none",
							borderRadius: 4,
							paddingLeft: 10
						}}
						required
						minLength="8"
						type="password"
						name="password"
						placeholder="Password"
						onChange={this.handleChange}
					/>{" "}
					<br />
					<input
						style={{
							marginTop: 5,
							width: 356,
							height: 40,
							border: "none",
							borderRadius: 4,
							paddingLeft: 10
						}}
						required
						minLength="8"
						type="password"
						name="confirmPassword"
						placeholder="Confirm Password"
						onChange={this.handleChange}
					/>{" "}
					<br />
					<button
						style={{ width: 356, fontSize: 18 }}
						className="btn btn-success mt-3"
						onClick={this.handleOnClick}
					>
						Sign up
					</button>
					<div style={{ color: "rgb(128, 128, 128)", marginTop: 4 }}>
						Have an account? <Link to="/login">Sign in</Link>
					</div>
					{this.state.isInvalid && (
						<div className="alert alert-danger mt-2">
							{this.state.errorMessage}
						</div>
					)}
				</div>
				<div>Not functional yet! (Under construction)</div>
			</div>
		);
	}
}

export default RegisterComponent;
