import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import MainPage from './components/Home/Home';

const routing = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact component={MainPage}></Route>
        <Redirect from="*" to="/" />
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
