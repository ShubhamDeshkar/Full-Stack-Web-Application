import React, { Component } from "react";
import TodoApp from "./components/todoApp/ToDoApp";
import "./App.css";
import "./bootstrap.css";

class App extends Component {
	render() {
		return (
			<div
				className="App"
				style={{ minHeight: "100vh", backgroundColor: "aliceblue" }}
			>
				<TodoApp />
			</div>
		);
	}
}

export default App;
