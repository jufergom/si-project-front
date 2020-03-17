import React from "react";
import { Tabs } from 'antd';
import metaData from './MetaData/Info.json';
import MainPage from "./Home.js";
import { clusterChange,dataChange,errorParse,updateData } from './actions/data';
import {useDispatch} from 'react-redux';

const { TabPane }  = Tabs

const MenuNavigation= ()=>{
        const dispatch = useDispatch();
        return(
            <div>
                <Tabs onTabClick={key=> dispatch(updateData(key))} style={{ paddingLeft:'50px', paddingRight: '50px'}} size="large" type="card" defaultActiveKey="0">
                    <TabPane  tab="Regresion" key="0">
                        <MainPage metadata={metaData.RegresionLineal} onChangeCluster={clusterChange} onChangeData={dataChange} onError={errorParse}/>
                    </TabPane>
                    <TabPane tab="Clasificacion" key="1">
                        <MainPage metadata={metaData.Clasificacion } onChangeCluster={clusterChange} onChangeData={dataChange}onError={errorParse}/>
                    </TabPane>
                    <TabPane tab="Agrupamiento" key="2">
                        <MainPage metadata={metaData.Agrupamiento } isCluster={true} onChangeCluster={clusterChange} onChangeData={dataChange}onError={errorParse}/>
                    </TabPane>
                    <TabPane tab="Redes Neuronales" key="3">
                        <MainPage metadata={metaData.RedesNeuronales} onChangeCluster={clusterChange} onChangeData={dataChange}onError={errorParse}/>
                    </TabPane>
                </Tabs>
            </div>
        );
    
}

export default MenuNavigation;