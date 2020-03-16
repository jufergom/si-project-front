import React from "react";
import {useDispatch} from 'react-redux';
import { Select, Card,Button } from 'antd';
import PropTypes from 'prop-types';
const { Option } = Select;

const renderOptions = list =>{return list.map(( value )=><Option key={value}>{ value }</Option>)}

const Variables= ({options,onChangeOption,onAccept})=>{
    const dispatch = useDispatch();
    return(
        <div>
            <Card title="Variables Independientes" style={{ fontWeight: "bolder"}} >
                <Select
                    style={{width: '500px'}}
                    placeholder="Selecione sus Variables"
                    mode="multiple"
                    onChange={ (e)=> dispatch(onChangeOption(e)) }
                >
                    { renderOptions(options) }
                </Select>
                <br/>
                <br/>
                <Button type="primary" onClick={()=> dispatch(onAccept())} style={{marginRight:'10px'}}> Aceptar </Button>
            </Card>
        </div>
    )
}

Variables.prototype={
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChangeOption: PropTypes.shape({
        type: PropTypes.string,
        payload: PropTypes.any
    }).isRequired,
    onAccept: PropTypes.shape({
        type: PropTypes.string,
    }).isRequired
}

export default Variables