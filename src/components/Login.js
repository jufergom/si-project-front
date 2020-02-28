import React, { Component } from "react";
import { Button, Input, Avatar } from 'antd';
import { withRouter } from "react-router-dom";
import './Styles/Login.css';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state={
			username: '',
			password: '',
            visible: false,
            data: 'default'
        }
	}
	
	handleChange = (Name,event) => {
    	this.setState({[Name]: event.target.value});
	};
	
	checkAccount = () => {
		let url = 'http://localhost:5000/api/login';
        let data = {username: this.state.username, password: this.state.password};

        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.status === 200) {
				//let history = useHistory();
				this.props.history.push("/home");
            }
            else {
                alert('Usuario y/o contraseña incorrectos');
            }
        })
        .catch(error => {
			console.log(error);
            alert('Ha ocurrido un error al iniciar sesion, '+error);
        })
	}

    render() {
        return(
			<div>
				<br/>
				<br/>
				<div className="login-panel">
					<br/>
					<div className="login-title">
						Modelados Matemáticos
					</div>
					<br/>
					<Input.Group>
						<div className="login-form-row">
							<Avatar src="https://cdn.imgbin.com/13/24/2/imgbin-computer-icons-user-profile-password-login-end-user-GMxKLuYyvrp3YwaMZcZbLRMrd.jpg" />
							<div className="fixed-width"></div>
							<Input 
								className="input-form"
								value={this.state.username}
								onChange={this.handleChange.bind(this,'username')}
							/>
						</div>
						<br/>
						<br/>
						<div className="login-form-row">
							<Avatar src="https://cdn3.iconfinder.com/data/icons/black-easy/512/538684-lock_512x512.png" />
							<div className="fixed-width"></div>
							<Input.Password
								className="input-form" 
								value={this.state.password}
								onChange={this.handleChange.bind(this,'password')}
							/>
						</div>
					</Input.Group>
					<br/>
					<Button 
						type="primary" 
						className="login-button"
						onClick={this.checkAccount.bind(this)}
					>
						Iniciar Sesión
					</Button>
				</div>
			</div>
        );
    }
}

export default withRouter (LoginPage);