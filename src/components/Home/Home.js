import React, { Component } from "react";
import CSVReader from 'react-csv-reader'

const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header =>
      header
        .toLowerCase()
        .replace(/\W/g, '_')
  }

class MainPage extends Component {
    render() {
        return(
            <div>
                <CSVReader 
                    onFileLoaded={data => console.log(data)} 
                    parserOptions={papaparseOptions}
                />
            </div>
        );
    }
}

export default MainPage;