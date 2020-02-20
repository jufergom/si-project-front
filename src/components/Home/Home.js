import React, { Component } from "react";
import CSVReader from 'react-csv-reader';
import { message } from 'antd'
import './Home.css';

const parseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header =>
      header
        .toLowerCase()
        .replace(/\W/g, '_')
  }

const successMessage = () =>{
    message.success('El archivo se ha cargado con exito')
}

const errorMessage = () =>{
    message.error('Hubo un problema al cargar el archivo',3)
}

class MainPage extends Component {
    render() {
        return(
            <div>
                <CSVReader 
                    cssClass="react-csv-input"
                    label="Sube tu archivo .csv aqui"
                    onFileLoaded={ successMessage } 
                    parserOptions={parseOptions}
                    onError={ errorMessage }
                />
               
            </div>
        );
    }
}

export default MainPage;