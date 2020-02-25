import React, { Component } from "react";
import { Menu } from 'antd';

class MenuNavigation extends Component{
    constructor(props){
        super(props);

        this.state={
            selected: 'Regresion'
        }
    }

    
    handleClick = e =>{
        this.setState({
            selected: e.key
        })

        if( this.state.selected === 'Regresion'){

        }else if( this.state.selected === 'Clasificacion'){

        }else if( this.state.selected === 'Clustering' ){
            
        }else{
            
        }
    }

    render(){
        return(
            <div>
                <Menu
                onClick={this.handleClick} 
                selectedKeys={[this.state.selected]} 
                mode="horizontal"
                theme="dark"
                style={{width:'cover'}}
                >
                    <Menu.Item key='Regresion' style={{fontWeight:'bolder'}} >
                        Regresion
                    </Menu.Item>
                    <Menu.Item key='Clasificacion' style={{fontWeight:'bolder'}} >
                        Clasificacion
                    </Menu.Item>
                    <Menu.Item key='Clustering' style={{fontWeight:'bolder'}} >
                        Clustering
                    </Menu.Item>
                    <Menu.Item key='Redes Neuronales' style={{fontWeight:'bolder'}} >
                        Redes Neuronales
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default MenuNavigation;