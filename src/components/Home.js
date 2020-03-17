import React from "react";
import CSVReader from 'react-csv-reader';
import './Styles/Home.css';
import { Typography, Card, InputNumber } from 'antd';
import Mayre from 'mayre';
import Variables from "./Variables";
import PropTypes from 'prop-types';
import {useSelector,useDispatch} from 'react-redux';
import {sendData,optionsChange} from './actions/data';

const { Title } = Typography;
const parseOptions = {header: true}

const MainPage = ({metadata,isCluster,onChangeCluster,onChangeData,onError})=>{
        const dispatch = useDispatch();
        let isVariableVisible = useSelector( state => state.data.isVariableVisible);
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