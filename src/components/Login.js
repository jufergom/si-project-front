import React from "react";
import { Button, Input, Avatar} from 'antd';
import './Styles/Login.css';
import Mayre from 'mayre';
import { Redirect } from "react-router-dom";

import {useSelector,useDispatch} from 'react-redux';
import { loginCheck,loginUsernameHandleChange,loginPasswordHandleChange } from './actions/login';
 

const LoginPage = () => {
		let username = useSelector(state => state.login.username);
		let password = useSelector(state => state.login.password);
		let isLogged = useSelector(state => state.login.isLogged);
		const dispatch = useDispatch();
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
								onChange={(e) => dispatch(loginUsernameHandleChange(e.target.value))}
							/>
						</div>
						<br/>
						<br/>
						<div className="login-form-row">
							<Avatar src="https://cdn3.iconfinder.com/data/icons/black-easy/512/538684-lock_512x512.png" />
							<div className="fixed-width"></div>
							<Input.Password
								className="input-form" 
								onChange={(e) => dispatch(loginPasswordHandleChange(e.target.value))}
							/>
						</div>
					</Input.Group>
					<br/>
					<Button
						type="primary" 
						className="login-button"
						onClick={()=> {dispatch(loginCheck(username,password))}}
					>
						Iniciar Sesión
					</Button>
				</div>

				<Mayre
					of={ <Redirect to="/home"/> }
					when={isLogged}
				/>
			</div>
        );
	}
	
export default LoginPage;