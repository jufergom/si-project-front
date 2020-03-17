import React from "react";
import PropTypes from 'prop-types';
import { Select, Card, Divider } from 'antd';
import { useDispatch } from "react-redux";

const VariableDependant = ({onChangeOption,options})=>{
    const dispatch = useDispatch();
    return(
        <div>
            <Card.Meta title="Variables Dependientes" style={{fontWeight:"bolder"}} ></Card.Meta>
            <Divider style={{ width:'100%'}}/>
            <Select
                    style={{width: '500px'}}
                    placeholder="Selecione su Variable"
                    onChange={ (e)=> dispatch(onChangeOption(e,true)) }
                >
                    { options }
            </Select>
        </div>
    )
}

VariableDependant.prototype={
    onChangeOption: PropTypes.shape({
        type: PropTypes.string,
        payload: PropTypes.number
    }).isRequired,
    options: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default VariableDependant;