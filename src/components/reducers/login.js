import axios from 'axios';
import { message } from 'antd';
import Types from '../MetaData/actionsTypes';
import _ from 'lodash';

const intialLoginData ={
    username: '',
    password: '',
    isLogged: false
}

const postLoginCheck = state =>{
    const url = 'http://localhost:5000/api/login';
    const user = { username: state.username, password: state.password };
    axios.post(url,user)
    .then(response =>{
        if(response.status===200){ 
            handleLogin(state);
            message.success("Login Exitoso"); 
        }
    }).catch(error=>{
        message.error("Ha ocurrido un error "+error);
    })
    handleLogin(state);
}

const handleLogin = state =>{
    state.isLogged = true;
}


const loginReducer = ( state = intialLoginData, actions )=>{
    switch(actions.type){
        case Types.LOGIN_CHECK:{
            postLoginCheck(state);
            return state;
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