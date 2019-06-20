import React, { Component } from "react";

class ForgotComponent extends Component {
	render() {
		return (
			<>
				<h1 className="display-4 text-center mb-4">
					Don't worry, let us take care of this.
				</h1>
				<div className="container">
					<div style={{ fontSize: 18 }}>
						Please enter your Username or Email address
					</div>
					<input
						type="text"
						name="email"
						placeholder="Username/Email Address"
						style={{
							width: 300,
							height: 40,
							marginTop: 8,
							paddingLeft: 10,
							border: "none",
							borderRadius: 4
						}}
					/>{" "}
					<br />
					<button type="submit" className="btn btn-success mt-3">
						Submit
					</button>
				</div>
				<div>Not functional yet</div>
			</>
		);
	}
}

export default ForgotComponent;
