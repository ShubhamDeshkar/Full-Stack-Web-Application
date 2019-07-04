import axios from "axios";
import { JPA_API_URL } from "./Constants";

class UserDataService {
	createUser(user) {
		axios.get(`${JPA_API_URL}/`);
	}
}

export default UserDataService;
