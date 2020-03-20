import Types from '../MetaData/actionsTypes';

export const dataChange = data =>{
    return{
        type: Types.DATA_CHANGE,
        payload: data
    }
}

export const clusterChange = value =>{
    return{
        type: Types.CLUSTER_CHANGE ,
        payload: value
    }
}

export const updateData = key =>{
    return{
        type: Types.DATA_UPDATE,
        payload: key 
    }
}

export const errorParse = ()=>{
    return{
        type: Types.ERROR_PARSE
    }
}

export const sendData = ()=>{
    return{
        type: Types.ACCEPT
    }
}

export const sendDataLogistic = ()=>{
	return{
		type: Types.ACCEPT_LOGISTIC
	}
}

export const sendDataNeuralNetwork = ()=>{
	return{
		type: Types.ACCEPT_NEURAL_NETWORK
	}
}

export const optionsChange = (value,isDependent) =>{
    if(isDependent){
        return { type: Types.OPTIONS_CHANGE_DEPENDANT,payload: value};
    }
    return { type: Types.OPTIONS_CHANGE_INDEPENDANT,payload: value}
}

export const typeVarChange = value => {
	return{
        type: Types.OPTIONS_CHANGE_TYPE ,
        payload: value
    }
}

export const onChangeOutputVariable = value => {
	return{
        type: Types.OPTIONS_CHANGE_OUTPUT ,
        payload: value
    }
}

export const onChangeSize1 = value => {
	return{
        type: Types.SIZE_1_CHANGE ,
        payload: value
    }
}

export const onChangeSize2 = value => {
	return{
        type: Types.SIZE_2_CHANGE ,
        payload: value
    }
}

export const onChangeNumberOfIterations = value => {
	return{
        type: Types.NUMBER_ITERATIONS_CHANGE ,
        payload: value
    }
}

export const onChangeActivationFunction = value => {
	return{
        type: Types.ACTIVATION_FUNCTION_CHANGE ,
        payload: value
    }
}