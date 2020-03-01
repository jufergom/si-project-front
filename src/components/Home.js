import React, { Component } from "react";
import CSVReader from 'react-csv-reader';
import { message } from 'antd'
import './Styles/Home.css';
import { Typography, Card } from 'antd';
import Mayre from 'mayre';
import Variables from "./Variables";

const { Title } = Typography;


const parseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header =>
      header
        .toLowerCase()
        .replace(/\W/g, '_')
  }

class MainPage extends Component {
    constructor(props){
        super(props);
        this.state={
            visible: false,
            data: 'default',
        }
    }

    successMessage = (data) =>{
        message.success('El archivo se ha cargado con exito')
        let variables  = Object.getOwnPropertyNames( data[0] )
        variables.splice(0,1);
        this.setState({visible: true, data: variables })
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
                            cover={<img alt={ this.props.Titulo} style={{paddingLeft:'110px',paddingRight:'50px',width:'500px',height:'300px'}} src={this.props.mt.Imagen} />}
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
                <br/>
                <Mayre
                    of={ Variables }
                    when={ this.state.visible }
                    with={{var: this.state.data }}
                />
            </div>
        );
    }
}

export default MainPage;