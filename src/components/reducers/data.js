import _ from 'lodash';
import Types from '../MetaData/actionsTypes';
import { message } from 'antd';
import axios from 'axios';

const initialDataState ={
    variableOptions: [],
    selectedVariablesIndependent: [],
    selectedVariableDependent:'',
	selectedVariableType:'',
	selectedVariableOutput:'',
    numberCluster: 0,
	size1: 0,
	size2: 0,
	numberIterations: 500,
	activationFunction: '',
    parseData: [],
    isVariableVisible:false,
    useDependant: true,
	useType: false,
	useNeuralNetwork: false
}

const onChangeData = (state,data) =>{
    const newState = _.cloneDeep(state);
    newState.parseData = data
    const variables = Object.getOwnPropertyNames(data[0])
    variables.splice(0,1);
    newState.variableOptions = variables;
	if(state.useType || state.useNeuralNetwork) {
		newState.isVariableVisible = false;
	} else {
		newState.isVariableVisible = true;
	}
	newState.useType = state.useType;
	newState.useNeuralNetwork = state.useNeuralNetwork;
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

const onAccept= state =>{	
	const url = 'http://localhost:5000/linear';
	const info = 
	{ 
		selectedVariablesIndependent: state.selectedVariablesIndependent, 
		selectedVariableDependent: state.selectedVariableDependent,
		numberCluster: state.numberCluster,
		parseData: state.parseData
	};
	axios.post(url, info)
	.then(response =>{
		if(response.status === 200){
			message.success(response.data.responseText)
		}
		
	}).catch( error =>{
		message.error("Hubo un error al enviar "+error)
	})
}

const onAcceptLogistic = state =>{
	if(state.numberCluster == 0) {
		const url = 'http://localhost:5000/logistic';
		const info = 
		{ 
			selectedVariableType: state.selectedVariableType,
			numberCluster: state.numberCluster,
			parseData: state.parseData
		};
		axios.post(url, info)
		.then(response =>{
			if(response.status === 200){
				message.success(response.data.responseText)
			}
			
		}).catch( error =>{
			message.error("Hubo un error al enviar "+error)
		})
	} else {
		const url = 'http://localhost:5000/clustering';
		const info = 
		{ 
			selectedVariableType: state.selectedVariableType,
			numberCluster: state.numberCluster,
			parseData: state.parseData
		};
		axios.post(url, info)
		.then(response =>{
			if(response.status === 200){
				message.success(response.data.responseText)
			}
			
		}).catch( error =>{
			message.error("Hubo un error al enviar "+error)
		})
	}
}

const onAcceptNeuralNetwork = state =>{
	const url = 'http://localhost:5000/neuralnetwork';
	const info = 
	{ 
		outputVariable: state.selectedVariableOutput,
		hiddenLayers1: state.size1,
		hiddenLayers2: state.size2,
		activationFunction: state.activationFunction,
		numberOfIterations: state.numberIterations,
		parseData: state.parseData
	};
	
	axios.post(url, info)
	.then(response =>{
		if(response.status === 200){
			message.success(response.data.responseText)
		}
		
	}).catch( error =>{
		message.error("Hubo un error al enviar "+error)
	}) 
}

const updateData = (state,key) =>{
    const newState = _.cloneDeep(state);
    newState.variableOptions = [];
    newState.selectedVariablesIndependent = [];
    newState.selectedVariableDependent = '';
    newState.numberCluster = 0;
	newState.size1 = 0;
	newState.size2 = 0;
	newState.numberIterations = 500;
	newState.activationFunction = '';
    newState.parseData = [];
    newState.isVariableVisible = false;
	newState.useType = false;
	newState.useNeuralNetwork = false;
    switch(key){
        case '0':{ newState.useDependant = true ; newState.useType = false; newState.useNeuralNetwork = false; break;}
        case '1':{ newState.useDependant = false ; newState.useType = true; newState.useNeuralNetwork = false; break;}
        case '2':{ newState.useDependant = false; newState.useType = true; newState.useNeuralNetwork = false; break;}
        case '3':{ newState.useDependant = false; newState.useType = false; newState.useNeuralNetwork = true; break; }
        default:{ newState.useDependant = true; newState.useType = false; newState.useNeuralNetwork = false; break; } 
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

const optionsChangeType = (state, value) => {
	const newState = _.cloneDeep(state);
    newState.selectedVariableType = value
    return newState;
}

const optionsChangeOutput = (state, value) => {
	const newState = _.cloneDeep(state);
    newState.selectedVariableOutput = value
    return newState;
}

const onChangeSize1 = (state, value) => {
	const newState = _.cloneDeep(state);
    newState.size1 = value
    return newState;
}

const onChangeSize2 = (state, value) => {
	const newState = _.cloneDeep(state);
    newState.size2 = value
    return newState;
}

const onChangeNumberIterations = (state, value) => {
	const newState = _.cloneDeep(state);
    newState.numberIterations = value
    return newState;
}

const onChangeActivationFunction = (state, value) => {
	const newState = _.cloneDeep(state);
    newState.activationFunction = value
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
		case Types.SIZE_1_CHANGE:{
			return onChangeSize1(state,action.payload);
		}
		case Types.SIZE_2_CHANGE:{
			return onChangeSize2(state,action.payload);
		}
		case Types.NUMBER_ITERATIONS_CHANGE:{
			return onChangeNumberIterations(state,action.payload);
		}
		case Types.ACTIVATION_FUNCTION_CHANGE:{
			return onChangeActivationFunction(state,action.payload);
		}
        case Types.ERROR_PARSE:{
            return onError(state);
        }
        case Types.ACCEPT:{
            onAccept(state);
            return state;
        }
		case Types.ACCEPT_LOGISTIC:{
			onAcceptLogistic(state);
            return state;
		}
		case Types.ACCEPT_NEURAL_NETWORK:{
			onAcceptNeuralNetwork(state);
            return state;
		}
        case Types.OPTIONS_CHANGE_INDEPENDANT:{
            return optionsChangeIndependent(state,action.payload);
        }
        case Types.OPTIONS_CHANGE_DEPENDANT:{
            return optionsChangeDependant(state,action.payload);
        }
		case Types.OPTIONS_CHANGE_TYPE:{
			return optionsChangeType(state,action.payload);
		}
		case Types.OPTIONS_CHANGE_OUTPUT:{
			return optionsChangeOutput(state,action.payload);
		}
        default:
            return state;
    }
}

export default dataReducer;