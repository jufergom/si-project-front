import _ from 'lodash';
import Types from '../MetaData/actionsTypes';
import { message } from 'antd';

const initialDataState ={
    variableOptions: [],
    selectedVariables: [],
    numberCluster: 0,
    parseData: [],
    isVariableVisible:false
}

const onChangeData = (state,data) =>{
    const newState = _.cloneDeep(state);
    newState.parseData = data
    const variables = Object.getOwnPropertyNames(data[0])
    variables.splice(0,1);
    newState.variableOptions = variables;
    newState.isVariableVisible = true;
    
    return newState;
}

const onChangeCluster = (state,valor) =>{
    const newState = _.cloneDeep(state);
    newState.numberCluster = valor;
    return newState;
}

const onError = state=>{
    message.error('Ocurrio un error al cargar el Archivo');
    return state;
}

const updateData = state =>{
    const newState = _.cloneDeep(state);
    newState.variableOptions = [];
    newState.selectedVariables = [];
    newState.numberCluster = 0;
    newState.parseData = [];
    newState.isVariableVisible = false;
    return newState;
}

const optionsChange = (state,value)=>{
    const newState = _.cloneDeep(state);
    newState.selectedVariables = value
    return newState;
}


const dataReducer = ( state = initialDataState ,action) =>{
    switch(action.type){
        case Types.DATA_CHANGE:{
            return onChangeData(state,action.payload);
        }
        case Types.DATA_UPDATE:{
            return updateData(state);
        }
        case Types.CLUSTER_CHANGE:{
            return onChangeCluster(state,action.payload);
        }
        case Types.ERROR_PARSE:{
            return onError(state);
        }
        case Types.ACCEPT:{
            return state;
        }
        case Types.OPTIONS_CHANGE:{
            return optionsChange(state,action.payload);
        }
        default:
            return state;
    }
}

export default dataReducer;