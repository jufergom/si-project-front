import React from 'react';
import '../src/components/Styles/App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from './components/Home';
import MenuNavigation from './components/Menu';


const routing = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact component={MenuNavigation}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

function App() {
  return (
    <div className="App">
      {routing}
    </div>
  );
}

export default App;
