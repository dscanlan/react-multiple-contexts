import React, { Component, Fragment } from 'react';
import loginContext from '../Contexts/Login';

class LoginForm extends Component {
	state = {};
	render() {
		return (
			<loginContext.Consumer>
				{value => {
					const {
						state: { viewer, err },
						actions: { logIn, logOut }
					} = value;
					return viewer ? (
						<Fragment>
							<h3>Logged in as {viewer}</h3>
							<button onClick={logOut}>Log Out</button>
						</Fragment>
					) : (
						<Fragment>
							<input
								placeholder="email"
								ref={r => (this.loginEmailRef = r)}
							/>
							<input
								placeholder="password"
								ref={r => (this.loginPasswordRef = r)}
							/>
							<button
								type="submit"
								onClick={() =>
									logIn(
										this.loginEmailRef.value,
										this.loginPasswordRef.value
									)
								}
							>
								Login
							</button>
							<div>{err}</div>
						</Fragment>
					);
				}}
			</loginContext.Consumer>
		);
	}
}

export default LoginForm;
