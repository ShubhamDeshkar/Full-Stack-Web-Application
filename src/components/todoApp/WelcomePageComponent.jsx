import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService";

export default class WelcomePageComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: ""
		};

		this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
		this.handleBadResponse = this.handleBadResponse.bind(this);
		this.retrieveMessage = this.retrieveMessage.bind(this);
	}

	render() {
		return (
			<div style={{ minHeight: "100vh" }}>
				<h1 className="display-4 text-center mb-4">
					Hello, {this.props.match.params.name}!<br /> Welcome to Remind.ly!
				</h1>
				<div className="container">
					<div className="container" style={{ fontSize: 20 }}>
						Get the most out of your life by managing your goals in an effecient
						way.
					</div>
					<div>
						<Link to="/todos">
							<button className="btn btn-success mt-3">
								Click here to get started
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}

	retrieveMessage() {
		HelloWorldService.executeHelloWorldPathVariable(
			this.props.match.params.name
		)
			.then(response => this.handleSuccessfulResponse(response))
			.catch(error => this.handleBadResponse(error));
	}

	handleSuccessfulResponse(response) {
		this.setState({
			message: response.data.message
		});
	}

	handleBadResponse(error) {
		let errorMessage = "";
		if (error.message) errorMessage += error.message;

		if (error.response && error.response.data)
			errorMessage += error.response.data.message;

		this.setState({
			message: errorMessage
		});
	}
}
