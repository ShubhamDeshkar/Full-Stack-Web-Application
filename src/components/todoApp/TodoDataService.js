import axios from "axios";
import { API_URL, JPA_API_URL } from "./Constants";

class TodoDataService {
	retrieveAllTodos(name) {
		return axios.get(`${JPA_API_URL}/users/${name}/todos`);
	}

	deleteTodos(name, id) {
		return axios.delete(`${API_URL}/users/${name}/todos/${id}`);
	}

	retrieveTodo(name, id) {
		return axios.get(`${API_URL}/users/${name}/todos/${id}`);
	}

	updateTodo(name, id, todo) {
		return axios.put(`${API_URL}/users/${name}/todos/${id}`, todo);
	}

	createTodo(name, todo) {
		return axios.put(`${API_URL}/users/${name}/todos/`, todo);
	}
}

export default new TodoDataService();
