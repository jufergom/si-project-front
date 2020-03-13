import React, { Component } from "react";
import { Select, Card,Button } from 'antd';


const { Option } = Select;


class Variables extends Component{
    constructor(props){
        super(props);
        this.state={
            opc: [] // opciones de las variables
        }
    }

    handleChange = e => this.props.actualizar(e) // binding doble de data

    click = () => this.props.click();

    refresh = () => this.setState({ opc: this.props.var }); // para refrescar la lista

    componentDidMount = () => this.setState({ opc: this.props.var });// trigger cuando el componente se redenderiza
    
    getDerivedStateFromProps = () => this.setState({ opc: this.props.var }); // trigger cuando recibe nuevos props

    opciones = lista => {return lista.map(( valor )=><Option key={valor}>{ valor }</Option>)}// funcion para jsx de la lista
    
    render(){
        return(
            <div>
                <Card title="Variables Independientes" style={{ fontWeight: "bolder"}} >
                    <Select
                        style={{width: '500px'}}
                        placeholder="Selecione sus Variables"
                        mode="multiple"
                        value={this.props.val}
                        onChange={this.handleChange}
                    >
                        { this.opciones( this.state.opc ) }
                    </Select>
                    <br/>
                    <br/>
                    <Button type="primary" style={{marginRight:'10px'}} onClick={this.click}> Aceptar </Button>

                    <Button type="primary" onClick={this.refresh} >Refrescar</Button>
                </Card>
            </div>
        )
    }
}

export default Variables