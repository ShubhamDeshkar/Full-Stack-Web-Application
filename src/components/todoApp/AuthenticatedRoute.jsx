import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import { Route, Redirect } from "react-router-dom";

export default class AuthenticatedRoute extends Component {
	render() {
		const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
		if (isUserLoggedIn) return <Route {...this.props} />;
		else return <Redirect to="/login" />;
	}
}
