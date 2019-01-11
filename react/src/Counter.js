import React, { Component } from 'react';

// Simple stateful component to test that my babel class properties plugin was working
export default class Counter extends Component {
	state = {
		count: 0
	};

	handleIncrement = () => {
		this.setState({
			count: this.state.count + 1
		});
	};

	handleReset = () => {
		this.setState({
			count: 0
		});
	};

	render() {
		return (
			<div>
				<h2>Count: {this.state.count}</h2>
				<button onClick={this.handleIncrement}>
					Add one!
				</button>
				<button onClick={this.handleReset}>Reset!</button>
			</div>
		);
	}
}
