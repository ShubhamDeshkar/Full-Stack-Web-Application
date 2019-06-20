import axios from "axios";

class AuthenticationService {
	createBasicAuthHeader(username, password) {
		return "Basic " + window.btoa(username + ":" + password);
	}

	executeBasicAuthenticationService(username, password) {
		return axios.get("https://stormy-garden-35152.herokuapp.com/basic-auth", {
			headers: {
				authorization: this.createBasicAuthHeader(username, password)
			}
		});
	}

	registerSuccessfulLogin(username, password) {
		sessionStorage.setItem("authenticatedUser", username);
		this.setupAxiosInterceptor(this.createBasicAuthHeader(username, password));
	}

	logout() {
		sessionStorage.removeItem("authenticatedUser");
	}

	isUserLoggedIn() {
		let user = sessionStorage.getItem("authenticatedUser");
		if (user === null) return false;
		else return true;
	}

	getUser() {
		let user = sessionStorage.getItem("authenticatedUser");
		if (user === null) return "";
		else return user;
	}

	setupAxiosInterceptor(basicAuthorization) {
		axios.interceptors.request.use(config => {
			if (this.isUserLoggedIn()) {
				config.headers.authorization = basicAuthorization;
			}
			return config;
		});
	}
}

export default new AuthenticationService();
