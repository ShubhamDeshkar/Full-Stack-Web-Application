import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js";

class HeaderComponent extends Component {
	render() {
		const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

		return (
			<header>
				<nav
					className="navbar navbar-expand-md navbar-dark bg-dark"
					style={{ height: 55 }}
				>
					<div>
						<a
							className="navbar-brand"
							href="https://github.com/ShubhamDeshkar"
							// eslint-disable-next-line react/jsx-no-target-blank
							target="_blank"
						>
							GitHub
						</a>
						<Link to="/" className="navbar-brand">
							RemindLy
						</Link>
					</div>
					<ul className="navbar-nav">
						{/* {isUserLoggedIn && (
							<li>
								<Link className="nav-link" to="/welcome/shubham">
									Home
								</Link>
							</li>
						)} */}
						{isUserLoggedIn && (
							<li>
								<Link className="nav-link" to="/todos">
									Todos
								</Link>
							</li>
						)}
					</ul>
					<ul className="navbar-nav navbar-collapse justify-content-end">
						{!isUserLoggedIn && (
							<li>
								<Link className="nav-link" to="/register">
									Sign up
								</Link>
							</li>
						)}
						{!isUserLoggedIn && (
							<li>
								<Link className="nav-link" to="/login">
									Login
								</Link>
							</li>
						)}
						{isUserLoggedIn && (
							<li>
								<Link
									className="nav-link"
									to="/logout"
									onClick={AuthenticationService.logout}
								>
									Logout
								</Link>
							</li>
						)}
					</ul>
				</nav>
			</header>
		);
	}
}

export default withRouter(HeaderComponent);
