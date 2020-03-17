import _ from 'lodash';
import Types from '../MetaData/actionsTypes';
import { message } from 'antd';

const initialDataState ={
    variableOptions: [],
    selectedVariablesIndependent: [],
    selectedVariableDependent:'',
    numberCluster: 0,
    parseData: [],
    isVariableVisible:false,
    useDependant: true
}

const onChangeData = (state,data) =>{
    const newState = _.cloneDeep(state);
    newState.parseData = data
    const variables = Object.getOwnPropertyNames(data[0])
    variables.splice(0,1);
    newState.variableOptions = variables;
    newState.isVariableVisible = true;
    message.success("Se cargo el archivo con exito");
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

const updateData = (state,key) =>{
    const newState = _.cloneDeep(state);
    newState.variableOptions = [];
    newState.selectedVariablesIndependent = [];
    newState.selectedVariableDependent = '';
    newState.numberCluster = 0;
    newState.parseData = [];
    newState.isVariableVisible = false;
    switch(key){
        case '0':{ newState.useDependant = true ; break;}
        case '1':{ newState.useDependant = true ; break;}
        case '2':{ newState.useDependant = false; break;}
        case '3':{ newState.useDependant = false; break; }
        default:{ newState.useDependant = true; break; } 
    }
    return newState;
}

const optionsChangeIndependent = (state,value)=>{
    const newState = _.cloneDeep(state);
    newState.selectedVariablesIndependent = value
    return newState;
}

const optionsChangeDependant = (state,value) =>{
    const newState = _.cloneDeep(state);
    newState.selectedVariableDependent = value
    return newState;
}

const dataReducer = ( state = initialDataState ,action) =>{
    switch(action.type){
        case Types.DATA_CHANGE:{
            return onChangeData(state,action.payload);
        }
        case Types.DATA_UPDATE:{
            return updateData(state,action.payload);
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
        case Types.OPTIONS_CHANGE_INDEPENDANT:{
            return optionsChangeIndependent(state,action.payload);
        }
        case Types.OPTIONS_CHANGE_DEPENDANT:{
            return optionsChangeDependant(state,action.payload);
        }
        default:
            return state;
    }
}

export default dataReducer;