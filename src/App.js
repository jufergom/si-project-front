import React from 'react';
import './components/Styles/App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from './components/Login';
import Menu from './components/Menu';

const routing = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact component={LoginPage}></Route>
        <Route path="/home" component={Menu}></Route>
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