import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomePageComponent from "./WelcomePageComponent";
import FooterComponent from "./FooterComponent";
import ListTodosComponent from "./ListTodosComponent";
import TodoComponent from "./TodoComponent";
import LandingPage from "./LandingComponent";
import ForgotComponent from "./ForgotComponent";
import RegisterComponent from "./RegisterComponent";

export default class TodoApp extends Component {
	render() {
		return (
			<div>
				<Router>
					<HeaderComponent />
					<Switch>
						<Route path="/" exact component={LandingPage} />
						<Route path="/welcome" exact component={LandingPage} />
						<Route path="/register" exact component={RegisterComponent} />
						<Route path="/login" exact component={LoginComponent} />
						<Route path="/forgot" exact component={ForgotComponent} />
						<AuthenticatedRoute
							path="/welcome/:name"
							exact
							component={WelcomePageComponent}
						/>
						<AuthenticatedRoute
							path="/todos"
							exact
							component={ListTodosComponent}
						/>
						<AuthenticatedRoute
							path="/todos/:id"
							exact
							component={TodoComponent}
						/>
						<Route path="/logout" exact component={LogoutComponent} />
						<Route component={ErrorComponent} />
					</Switch>
					<FooterComponent />
				</Router>
			</div>
		);
	}
}
