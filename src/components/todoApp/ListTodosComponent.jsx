import React, { Component } from "react";
import TodoDataService from "./TodoDataService";
import AuthenticationService from "./AuthenticationService";
import moment from "moment";

export default class ListTodosComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			message: null
		};

		this.deleteTodo = this.deleteTodo.bind(this);
		this.updateTodo = this.updateTodo.bind(this);
		this.refreshTodos = this.refreshTodos.bind(this);
		this.addNewTodo = this.addNewTodo.bind(this);
	}

	componentDidMount() {
		this.refreshTodos();
	}

	refreshTodos() {
		let name = AuthenticationService.getUser();
		TodoDataService.retrieveAllTodos(name)
			.then(response =>
				this.setState({
					todos: response.data
				})
			)
			.catch(error => {
				console.log(error.message);
				this.props.history.push("/error");
			});
	}

	deleteTodo(id) {
		let name = AuthenticationService.getUser();
		TodoDataService.deleteTodos(name, id).then(response => {
			this.setState({
				message: "Successfully deleted " + id.toString()
			});
			this.refreshTodos();
		});
	}

	updateTodo(id) {
		this.props.history.push(`/todos/${id}`);
	}

	addNewTodo() {
		this.props.history.push("/todos/-1");
	}

	render() {
		return (
			<div>
				<h1 className="display-4 text-center mb-5">Manage your Todos here</h1>
				{this.state.message && (
					<div className="alert alert-success">{this.state.message}</div>
				)}
				<button
					className="btn btn-success mb-3"
					style={{ width: 250 }}
					onClick={() => this.addNewTodo()}
				>
					Add New
				</button>
				<div className="container">
					<table className="table">
						<thead>
							<tr>
								<th>Todo ID</th>
								<th>Description</th>
								<th>Status</th>
								<th>Target Date</th>
								<th>Update</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{this.state.todos.map(todo => (
								<tr key={todo.id}>
									<td>{todo.id}</td>
									<td>{todo.description}</td>
									<td>{todo.status.toString()}</td>
									<td>{moment(todo.targetDate).format("MM-DD-YYYY")}</td>
									<td>
										<button
											className="btn btn-warning"
											onClick={() => this.updateTodo(todo.id)}
										>
											Update
										</button>
									</td>
									<td>
										<button
											className="btn btn-danger"
											onClick={() => this.deleteTodo(todo.id)}
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
