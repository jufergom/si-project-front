import React, { Component } from "react";
import { Tabs } from 'antd';
import metaData from './MetaData/Info.json';
import MainPage from "./Home.js";

const { TabPane }  = Tabs

class MenuNavigation extends Component{
    constructor(props){
        super(props);

        this.state={
            selected: 0,
        }
    }

    
    handleClick = e =>{
        
    }

    render(){
        return(
            <div>
                
            </div>
        );
    }
}

export default MenuNavigation;