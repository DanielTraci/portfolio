import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css"
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import MenuAppBar from './components/MenuAppBar'
import dataSkills from "./Skills.json"




function App(props) {
  const [skills, updateSkills] = useState(dataSkills)

  return (
    <div className="appMargins">
      <MenuAppBar />
      <Switch>
        <Route exact path="/" render={(routeProps) => {
          return <HomePage skills={skills} {...routeProps} />
        }} />
      </Switch>
      <Footer/>
    </div>
      );
}

export default withRouter(App)
