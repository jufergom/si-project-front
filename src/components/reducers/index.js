import {combineReducers} from 'redux'
import dataReducer from './data';
import loginReducer from './login';
// importar los REDUCERS

const allReducers = combineReducers({
    login: loginReducer,
    data: dataReducer
})

export default allReducers;