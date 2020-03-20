import React from "react";
import {useDispatch} from 'react-redux';
import { Select, Card,Button } from 'antd';
import PropTypes from 'prop-types';
const { Option } = Select;

const renderOptions = list =>{return list.map(( value )=><Option key={value}>{ value }</Option>)}

const VariableType= ({options,typeVarChange,onAccept})=>{
    const dispatch = useDispatch();
    return(
        <div>
            <Card title="Variable Tipo" style={{ fontWeight: "bolder"}} >
                <Select
                    style={{width: '500px'}}
                    placeholder="Selecione su Variable"
                    mode="multiple"
                    onChange={ (e)=> dispatch(typeVarChange(e)) }
                >
                    { renderOptions(options) }
                </Select>
                <br/>
                <Button type="primary" onClick={()=> dispatch(onAccept()) } style={{marginRight:'10px'}}> Aceptar </Button>
            </Card>

        </div>
    )
}

VariableType.prototype={
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    typeVarChange: PropTypes.shape({
        type: PropTypes.string
    }).isRequired,
    onAccept: PropTypes.shape({
        type: PropTypes.string,
    }).isRequired,

}

export default VariableType