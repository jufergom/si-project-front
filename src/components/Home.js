import React, { Component } from "react";
import CSVReader from 'react-csv-reader';
import { message } from 'antd'
import './Styles/Home.css';
import { Typography, Card, InputNumber } from 'antd';
import Mayre from 'mayre';
import Variables from "./Variables";
import axios from "axios";

const { Title } = Typography;


const parseOptions = {
    header: true
  }

class MainPage extends Component {
    constructor(props){
        super(props);
        this.state={
            visible: false,
            data: 'default',
            variables: [],
            Ncluster: 0,
            parseData: [],
            accept: true
        }

        this.actualizar = this.actualizar.bind(this);
        this.accept = this.accept.bind(this);
    }

    getDerivedStateFromProps = () => this.setState({ visible: false, accept: false });

    accept = _ => {
        if(this.state.accept) {
            let url = 'http://localhost:5000/linear';
            let data = {
                variables: this.state.variables, 
                parseData: this.state.parseData
            };
            console.log(data);
            /*
            fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: {
                'Content-Type': 'application/json'
                }
            }).then(res => console.log(res))
            .catch(error => {
                console.log(error);
                message.error('Ha ocurrido un error al enviar los datos, '+error);
            })
            */
           axios.post(url, data)
            .then(response => {
                console.log(response.data);
                message.success("La presicion es: "+response.data.precision)
            });
        }
    }

    actualizar = valor =>{
        this.setState({ variables: valor },()=>{
            console.log( this.state.variables );
        })
    }

    onChange = valor => this.setState({ Ncluster: valor });

    successMessage = (data) =>{
        message.success('El archivo se ha cargado con exito')
        let variables  = Object.getOwnPropertyNames( data[0] ) // obtiene los nombres
        variables.splice(0,1); // quita el primer elemento
        this.setState({visible: true, data: variables, variables: [], parseData: data }) // setea el estado al valor

    }
    
    errorMessage = () =>{
        message.error('Hubo un problema al cargar el archivo')
    }

    render() {
        return(
            <div>
                <header>
                    
                    <div id="title_menu">
                        <Title> {this.props.mt.Titulo} </Title>
                    </div>
                    <div id="image_menu">
                        <Card 
                            cover={<img alt={ this.props.Titulo } style={{paddingLeft:'110px',paddingRight:'50px',width:'500px',height:'300px'}} src={this.props.mt.Imagen} />}
                        >    
                            <Card.Meta description={this.props.mt.Descripcion} style={{paddingLeft:'100px',width:'400px' ,alignItems:'center',textAlign:'justify'}}/>
                        </Card>
                    </div>
                </header>

                <CSVReader 
                    cssClass="csv-input"
                    label="Sube tu archivo .csv aqui"
                    onFileLoaded={data => this.successMessage(data) } 
                    parserOptions={ parseOptions}
                    onError={ this.errorMessage }

                />

                <Mayre
                    of={
                        <Card title="Numero de Clusters">
                            <InputNumber value={this.state.Ncluster } onChange={this.onChange} /> 
                        </Card> 
                        }
                    when={ this.props.Ncluster && this.state.visible }
                />

                <br/>

                <Mayre
                    of={ Variables }
                    when={ this.state.visible }
                    with={{var: this.state.data, actualizar: this.actualizar, val: this.state.variables, click: this.accept }}
                />

            </div>
        );
    }
}

export default MainPage;