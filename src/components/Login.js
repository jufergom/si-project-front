import React, { Component } from "react";
import { Button, Input, Avatar } from 'antd';
import './Styles/Login.css';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state={
            visible: false,
            data: 'default'
        }
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
							<Input />
						</div>
						<br/>
						<br/>
						<div className="login-form-row">
							<Avatar src="https://conceptdraw.com/a155c4/p40/preview/640/pict--cloud-lock-cloud-round-icons-vector-stencils-library" />
							<div className="fixed-width"></div>
							<Input.Password />
						</div>
					</Input.Group>
					<br/>
					<Button type="primary" className="login-button">Iniciar Sesión</Button>
				</div>
			</div>
        );
    }
}

export default LoginPage;