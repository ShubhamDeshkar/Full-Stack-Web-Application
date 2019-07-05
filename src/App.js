import React, { Component } from "react";
import TodoApp from "./components/todoApp/ToDoApp";
import "./App.css";
import "./bootstrap.css";

var http = require("http");
setInterval(function () {
	http.get(" https://stormy-garden-35152.herokuapp.com/jpa/users/");
	console.log('ping!')
}, 300000);

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
