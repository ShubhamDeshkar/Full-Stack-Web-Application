import React, { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
	constructor() {
		super();
		this.state = {
			counter: 0
		};

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.reset = this.reset.bind(this);
	}

	render() {
		let style = { fontSize: "50px", padding: "10px 15px" };
		return (
			<div>
				<CounterButton
					incrementMethod={this.increment}
					decrementMethod={this.decrement}
				/>
				<CounterButton
					by={5}
					incrementMethod={this.increment}
					decrementMethod={this.decrement}
				/>
				<CounterButton
					by={10}
					incrementMethod={this.increment}
					decrementMethod={this.decrement}
				/>
				<span className="count" style={style}>
					{this.state.counter}
				</span>
				<div>
					<button className="reset" onClick={this.reset}>
						Reset
					</button>
				</div>
			</div>
		);
	}

	increment(by) {
		this.setState(prevState => {
			return { counter: prevState.counter + by };
		});
	}

	decrement(by) {
		this.setState(prevState => {
			return { counter: prevState.counter - by };
		});
	}

	reset() {
		this.setState(() => {
			return { counter: 0 };
		});
	}
}

class CounterButton extends Component {
	constructor() {
		super();
		this.state = {
			counter: 0
		};

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	render() {
		// let style = { fontSize: "50px", padding: "10px 15px" };
		return (
			<div className="Counter">
				<button onClick={this.increment}>+{this.props.by}</button>
				<button onClick={this.decrement}>-{this.props.by}</button>
				{/* <span className="count" style={style}>
					{this.state.counter}
				</span> */}
			</div>
		);
	}

	increment() {
		this.setState(prevState => {
			return { counter: prevState.counter + this.props.by };
		});
		this.props.incrementMethod(this.props.by);
	}

	decrement() {
		this.setState(prevState => {
			return { counter: prevState.counter - this.props.by };
		});
		this.props.decrementMethod(this.props.by);
	}
}

CounterButton.defaultProps = {
	by: 1
};
