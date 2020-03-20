import React from "react";
import CSVReader from 'react-csv-reader';
import './Styles/Home.css';
import { Typography, Card, InputNumber } from 'antd';
import Mayre from 'mayre';
import Variables from "./Variables";
import VariableType from "./VariablesType";
import NeuralNetwork from "./NeuralNetwork";
import PropTypes from 'prop-types';
import {useSelector,useDispatch} from 'react-redux';
import {sendData,optionsChange,typeVarChange,onChangeOutputVariable, onChangeSize1, onChangeSize2, onChangeNumberOfIterations, onChangeActivationFunction, sendDataLogistic,sendDataNeuralNetwork} from './actions/data';

const { Title } = Typography;
const parseOptions = {header: true}

const MainPage = ({metadata,isCluster,onChangeCluster,onChangeData,onError})=>{
        const dispatch = useDispatch();
        let isVariableVisible = useSelector( state => state.data.isVariableVisible);
		let isTypeVisible = useSelector( state => state.data.useType);
		let isNeuralNetworkVisible = useSelector( state => state.data.useNeuralNetwork );
        let variableOptions = useSelector( state => state.data.variableOptions);
        return(
            <div>
                <header>
                    <div id="title_menu">
                        <Title> {metadata.Title} </Title>
                    </div>
                    <div id="image_menu">
                        <Card 
                            cover={<img alt={ metadata.Title } style={{paddingLeft:'110px',paddingRight:'50px',width:'500px',height:'300px'}} src={metadata.Image} />}
                        >    
                            <Card.Meta description={metadata.Description} style={{paddingLeft:'100px',width:'400px' ,alignItems:'center',textAlign:'justify'}}/>
                        </Card>
                    </div>
                </header>
                <CSVReader 
                    cssClass="csv-input"
                    label="Sube tu archivo .csv aqui"
                    onFileLoaded={data => { dispatch(onChangeData(data))}} 
                    parserOptions={ parseOptions}
                    onError={()=> dispatch(onError()) }

                />
                <Mayre
                    of={
                        <Card title="Numero de Clusters">
                            <InputNumber onChange={(e) => dispatch(onChangeCluster(e))} /> 
                        </Card> 
                        }
                    when={ isCluster }
                />
                <br/>
                <Mayre
                    of={ Variables }
                    when={isVariableVisible}
                    with={{ options: variableOptions,onChangeOption: optionsChange,onAccept: sendData}}
                />
				
				
				<br/>
                <Mayre
                of={VariableType}
                when={isTypeVisible}
                with={{ options: variableOptions, typeVarChange: typeVarChange,onAccept: sendDataLogistic}}
                />
				
				<br/>
                <Mayre
                of={NeuralNetwork}
                when={isNeuralNetworkVisible}
                with={{ options: variableOptions, onChangeOutputVariable:onChangeOutputVariable, onChangeSize1:onChangeSize1, onChangeSize2:onChangeSize2, onChangeNumberOfIterations:onChangeNumberOfIterations, onChangeActivationFunction: onChangeActivationFunction, onAccept: sendDataNeuralNetwork}}
                />
				
				
            </div>
        );
}

MainPage.prototype = {
    metadata : PropTypes.shape({
        Title: PropTypes.string,
        Description: PropTypes.string,
        Image: PropTypes.string
    }).isRequired,
    isCluster: PropTypes.bool,
    onChangeCluster: PropTypes.shape({
        type: PropTypes.string,
        payload: PropTypes.number
    }),
    onChangeData: PropTypes.shape({
        type: PropTypes.string,
        payload: PropTypes.number
    }),
    onError: PropTypes.shape({
        type: PropTypes.string
    }),
}

MainPage.defaultProps ={
    isCluster: false,
}
export default MainPage;