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

export const updateData = ()=>{
    return{
        type: Types.DATA_UPDATE
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

export const optionsChange = value =>{
    return{
        type: Types.OPTIONS_CHANGE,
        payload: value
    }
}