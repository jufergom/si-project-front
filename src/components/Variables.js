import React from "react";
import {useDispatch,useSelector} from 'react-redux';
import { Select, Card,Button } from 'antd';
import PropTypes from 'prop-types';
import Mayre from "mayre";
import VariableDependant from "./VariablesDep";
const { Option } = Select;

const renderOptions = list =>{return list.map(( value )=><Option key={value}>{ value }</Option>)}

const Variables= ({options,onChangeOption,onAccept})=>{
    const dispatch = useDispatch();
    let useDependant = useSelector(state => state.data.useDependant);
    return(
        <div>
            <Card title="Variables Independientes" style={{ fontWeight: "bolder"}} >
                <Select
                    style={{width: '500px'}}
                    placeholder="Selecione sus Variables"
                    mode="multiple"
                    onChange={ (e)=> dispatch(onChangeOption(e,false)) }
                >
                    { renderOptions(options) }
                </Select>
                <br/>
                <br/>
                <Mayre
                of={VariableDependant}
                when={useDependant}
                with={{onChangeOption: onChangeOption, options: renderOptions(options)}}
                />
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
    }).isRequired,

}

export default Variables