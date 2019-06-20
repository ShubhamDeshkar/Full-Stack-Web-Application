import axios from "axios";

class TodoDataService {
	retrieveAllTodos(name) {
		// let username = "shubham";
		// let password = "2307"; http://localhost:8080/users/${name}/todos
		// let basicAuthorization = "Basic " + window.btoa(username + ":" + password);
		return axios.get(
			`https://stormy-garden-35152.herokuapp.com/users/${name}/todos`
		);
	}

	deleteTodos(name, id) {
		return axios.delete(
			`https://stormy-garden-35152.herokuapp.com/users/${name}/todos/${id}`
		);
	}

	retrieveTodo(name, id) {
		return axios.get(
			`https://stormy-garden-35152.herokuapp.com/users/${name}/todos/${id}`
		);
	}

	updateTodo(name, id, todo) {
		return axios.put(
			`https://stormy-garden-35152.herokuapp.com/users/${name}/todos/${id}`,
			todo
		);
	}

	createTodo(name, todo) {
		return axios.put(
			`https://stormy-garden-35152.herokuapp.com/users/${name}/todos/`,
			todo
		);
	}
}

export default new TodoDataService();
