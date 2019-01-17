import * as React from 'react';

// Component State
export interface CounterState {
	count: number;
}

// Stateful React Component using generics for props and state
export class Counter extends React.Component<
	{},
	CounterState
> {
	state: CounterState = {
		count: 0
	};

	// Void methods because they don't return anything
	handleIncrement = (): void => {
		this.setState({
			count: this.state.count + 1
		});
	};

	handleReset = (): void => {
		this.setState({
			count: 0
		});
	};

	render() {
		return (
			<React.Fragment>
				<h2>Count: {this.state.count}</h2>
				<button onClick={this.handleIncrement}>
					Count +1
				</button>
				<button onClick={this.handleReset}>
					Reset Count
				</button>
			</React.Fragment>
		);
	}
}
