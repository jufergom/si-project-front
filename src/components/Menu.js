import React, { Component } from "react";
import { Tabs } from 'antd';
import metaData from './MetaData/Info.json';
import MainPage from "./Home.js";

const { TabPane }  = Tabs

class MenuNavigation extends Component{
    constructor(props){
        super(props);

        this.state={
            selected: "0",
        }
    }

    
    handleClick = key =>{
        this.setState({ selected: key});
        console.log(this.state.selected);
    }

    render(){
        return(
            <div>
                <Tabs style={{ paddingLeft:'50px', paddingRight: '50px'}} size="large" type="card" defaultActiveKey="0" onChange={this.handleClick} >
                    <TabPane tab="Regresion" key="0">
                        <MainPage mt={metaData.RegresionLineal }/>
                    </TabPane>
                    <TabPane tab="Clasificacion" key="1">
                        <MainPage mt={metaData.Clasificacion }/>
                    </TabPane>
                    <TabPane tab="Agrupamiento" key="2">
                        <MainPage mt={metaData.Agrupamiento }/>
                    </TabPane>
                    <TabPane tab="Redes Neuronales" key="3">
                        <MainPage mt={metaData.RedesNeuronales }/>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default MenuNavigation;