import React, { Component } from "react";
import CSVReader from 'react-csv-reader';
import { message } from 'antd'
import './Styles/Home.css';

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
            data: 'default'
        }
    }

    successMessage = (data) =>{
        message.success('El archivo se ha cargado con exito')
        this.setState({visible: true, data: data })
        console.log( data )
    }
    
    errorMessage = () =>{
        message.error('Hubo un problema al cargar el archivo',3)
    }

    render() {
        return(
            <div>
                <CSVReader 
                    cssClass="react-csv-input"
                    label="Sube tu archivo .csv aqui"
                    onFileLoaded={data => this.successMessage(data) } 
                    parserOptions={ parseOptions}
                    onError={ this.errorMessage }
                />
            </div>
        );
    }
}

export default MainPage;