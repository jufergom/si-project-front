import Types from '../MetaData/actionsTypes';

export const loginCheck = ( username , password )=>{
    return{
        type: Types.LOGIN_CHECK,
        payload: { username,password }
    }
}

export const loginUsernameHandleChange = value =>{
    return{
        type: Types.LOGIN_HANDLE_CHANGE_USERNAME,
        payload: value
    }
}

export const loginPasswordHandleChange = value =>{
    return{
        type: Types.LOGIN_HANDLE_CHANGE_PASSWORD,
        payload: value
    }
}
