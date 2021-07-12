import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css"
import HomePage from "./components/HomePage";
import MenuAppBar from './components/MenuAppBar'




function App(props) {

  return (
    <div className="appMargins">
      <MenuAppBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App
