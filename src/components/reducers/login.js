import axios from 'axios';
import { message } from 'antd';
import Types from '../MetaData/actionsTypes';
import _ from 'lodash';

const intialLoginData ={
    username: '',
    password: '',
    isLogged: false
}

export const postLoginCheck =( username, password )=>{
    const url = 'http://localhost:5000/api/login';
    const user = { username: username, password: password };
    axios.post(url,{ user })
    .then(response =>{
        if(response.status === 200){
            message.success("Login Exitoso")
            return true;
        }
        
        message.success("Verifique su usuario o contraseña")
        return false;

    }).catch( error =>{
        message.error("Error al iniciar sesion")
        return false;
    })

    return false;
}

const loginReducer = ( state = intialLoginData, actions )=>{
    switch(actions.type){
        case Types.LOGIN_CHECK:{
            let isLogged = postLoginCheck( actions.payload.username, actions.payload.password )
            const newState = _.cloneDeep(state);
            newState.isLogged = isLogged;
            return newState;
        }
        case Types.LOGIN_HANDLE_CHANGE_USERNAME:{
            const newState = _.cloneDeep(state);
            newState.username = actions.payload;
            return newState;
        }
        case Types.LOGIN_HANDLE_CHANGE_PASSWORD:{
            const newState = _.cloneDeep(state);
            newState.password = actions.payload;
            return newState;
        }
        default:
            return state;
    }
} 

export default loginReducer;