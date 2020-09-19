import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import UserItem from "./components/UserItem";
import UsersForm from './components/UsersForm'

class App extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    name: 'salis',
                    email: 'salis@salis.org'
				},
				{
					name: 'ab',
					email: 'ab@ab.org'
				},
				{
					name: 'angie',
					email: 'angie@angie.org'
				},
				{
					name: 'tony',
					email: 'tony@tony.org'
				}
            ]
		}
		
	}

	addNewUser = (newUser) => {
		this.setState({users: [...this.state.users, newUser]})
	}
	

	render() {
		return (
			<div className="App">
				{/* Form to add new user */}
				<div>
					<UsersForm addUser= {this.addNewUser} />
				</div>

				{/* List of users */}
				<div className="userList">
					{
						this.state.users.map((user, index) => <UserItem key={index} name={user.name} email={user.email} />)
					}
				</div>
			</div>
		);
	}
}

export default App;
