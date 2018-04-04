import React, { Component } from 'react';
import ButtonPanel from './Components/ButtonPanel';
import Display from './Components/Display'
import calculate from './func/calculate';
import "./App.css"
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			total: null,
			first: null,
			second: null,
			operation: null,
		};
	}
	handleClick = (buttonName) => {
		this.setState(calculate(this.state, buttonName));
	}
	render() {
		return (
			<div className="component-app">
				<Display
					first = {this.state.first || '0'}
					operation = {this.state.operation || ''}
					second = {this.state.second || '0'}
					total = {this.state.total || '0'}
				/>
				<ButtonPanel clickHanlder={this.handleClick} />
			</div>
		);
	}
}

export default App;
