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
							<Avatar src="https://lh3.googleusercontent.com/proxy/22TtDGVkrXXcOn1jQE0zqqY8b-L5VEvLrb1xx_eCchKKtPmkLrQv_0JH9D5psOxj8ujp9NPZ52C8-hOPzw7zn8PbNnoJJm_m2qoW17V3zEQGDyDuRxiSr70q9IeYGuUg" />
							<div className="fixed-width"></div>
							<Input 
								value={this.state.username}
								onChange={this.handleChange.bind(this,'username')}
							/>
						</div>
						<br/>
						<br/>
						<div className="login-form-row">
							<Avatar src="https://conceptdraw.com/a155c4/p40/preview/640/pict--cloud-lock-cloud-round-icons-vector-stencils-library" />
							<div className="fixed-width"></div>
							<Input.Password 
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