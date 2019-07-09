import axios from "axios";
import { JPA_API_URL } from "./Constants";

class UserDataService {
	createUser(user) {
		return axios.post(`${JPA_API_URL}/users/new`, user);
	}

	// getUser(user)
}

export default UserDataService;
