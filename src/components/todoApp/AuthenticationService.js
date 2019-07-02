import axios from "axios";
import { API_URL } from "./Constants";

class AuthenticationService {
	executeBasicAuthenticationService(username, password) {
		return axios.get(`${API_URL}/basic-auth`, {
			headers: {
				authorization: this.createBasicAuthHeader(username, password)
			}
		});
	}

	registerSuccessfulLogin(username, password) {
		sessionStorage.setItem("authenticatedUser", username);
		this.setupAxiosInterceptor(this.createBasicAuthHeader(username, password));
	}

	createBasicAuthHeader(username, password) {
		return "Basic " + window.btoa(username + ":" + password);
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
