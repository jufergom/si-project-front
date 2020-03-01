import React, { Component } from "react";
import { Select, Card,Button } from 'antd';
import { Route } from "react-router-dom";
import MenuNavigation from "./Menu";

const { Option } = Select;


class Variables extends Component{
    constructor(props){
        super(props);
        this.state={
            v: [], // valores selecionados
            opc: [] // opciones
        }
    }

    handleChange = v =>{ 
        this.setState({v},()=>{
            console.log(this.state.v);
        }) 
    }

    componentDidMount = () =>{
        this.setState({ opc: this.props.var });
    }
    
    componentWillReceiveProps = () =>{
        this.setState({ opc: this.props.var, v: [] });
    }

    opciones = lista =>{
        return lista.map(( valor )=><Option key={valor}>{ valor }</Option>)
    }
    
    render(){
        return(
            <div>
                <Card title="Variables Independientes" style={{ fontWeight: "bolder"}} >
                    <Select
                        style={{width: '500px'}}
                        placeholder="Selecione sus Variables"
                        mode="multiple"
                        value={this.state.v}
                        onChange={this.handleChange}
                    >
                        { this.opciones( this.state.opc) }
                    </Select>
                    <br />
                    <br/>
                    <Button type="primary"> Aceptar </Button>
                </Card>
            </div>
        )
    }
}

export default Variables