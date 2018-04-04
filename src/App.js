import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './Login/LoginForm';
import loginContext from './Contexts/Login';
import { logInAction } from './Login/Actions';

class Provider extends Component {
	state = {
		viewer: null,
		err: null
	};

	logIn = async (email, password) => {
		const [err, result] = await logInAction(email, password);
		if (err) {
			return this.setState({ err: err.response.data.reason });
		}
		//do something with tokens
		console.table(result);
		this.setState({ viewer: email });
	};

	logOut = () => this.setState({ viewer: null });
	render() {
		return (
			<loginContext.Provider
				value={{
					state: this.state,
					actions: {
						logIn: this.logIn,
						logOut: this.logOut
					}
				}}
			>
				{this.props.children}
			</loginContext.Provider>
		);
	}
}

const Nav = () => <LoginForm />;

class App extends Component {
	render() {
		return (
			<Provider>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>
					<div className="App-intro">
						<Nav />
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
