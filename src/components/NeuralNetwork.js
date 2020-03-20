import React from "react";
import {useDispatch} from 'react-redux';
import { Select, Card,Button, InputNumber } from 'antd';
import PropTypes from 'prop-types';
const { Option } = Select;

const renderOptions = list =>{return list.map(( value )=><Option key={value}>{ value }</Option>)}

const NeuralNetwork= ({options,onChangeOutputVariable,onChangeSize1, onChangeSize2, onChangeNumberOfIterations, onChangeActivationFunction,onAccept})=>{
    const dispatch = useDispatch();
    return(
        <div>
            <Card style={{ fontWeight: "bolder"}} >
				
				<Card title="Variable de Salida">
					<Select
						style={{width: '500px'}}
						placeholder="Selecione su Variable"
						onChange={ (e)=> dispatch(onChangeOutputVariable(e,false)) }>
						{ renderOptions(options) }
					</Select>
				</Card> 
				
				
                <br/>
				<br/>
				
				<Card title="Hidden Layers Size 1">
                            <InputNumber onChange={(e) => dispatch(onChangeSize1(e))} /> 
				</Card> 
				<br/>
				
				<Card title="Hidden Layers Size 2">
                            <InputNumber onChange={(e) => dispatch(onChangeSize2(e))} /> 
				</Card> 
				<br/>
				
				<Card title="Numero de Iteraciones">
                            <InputNumber onChange={(e) => dispatch(onChangeNumberOfIterations(e))} /> 
				</Card> 
				<br/>
				
				<Card title="Funcion de Activacion">
                            <Select
							style={{width: '500px'}}
							placeholder="Selecione su Funcion de Activacion"
							onChange={ (e)=> dispatch(onChangeActivationFunction(e,false)) }>
								<Option key="identity"> identity </Option>
								<Option key="logistic"> logistic </Option>
								<Option key="tanh"> tanh </Option>
								<Option key="relu"> relu </Option>
						</Select>
				</Card> 
				
				
				<br/>
				<br/>
				
                <Button type="primary" onClick={()=> dispatch(onAccept()) } style={{marginRight:'10px'}}> Aceptar </Button>
            </Card>

        </div>
    )
}

NeuralNetwork.prototype={
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    typeVarChange: PropTypes.shape({
        type: PropTypes.string
    }).isRequired,
    onAccept: PropTypes.shape({
        type: PropTypes.string,
    }).isRequired,

}

export default NeuralNetwork