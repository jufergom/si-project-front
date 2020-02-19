import React, { Component } from "react";
import CSVReader from 'react-csv-reader';
import { message } from 'antd'

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
    message.success('El archivo se cargo con exito',3)
}

const errorMessage = () =>{
    message.error('Hubo un problema al cargar el archivo',3)
}

class MainPage extends Component {
    render() {
        return(
            <div>
                <CSVReader 
                    onFileLoaded={ successMessage } 
                    parserOptions={parseOptions}
                    onError={ errorMessage }
                />
               
            </div>
        );
    }
}

export default MainPage;