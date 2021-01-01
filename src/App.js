import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './styles/App.css';
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={MainPage}/>
    </Switch>
    </Router>
   
  );
}

export default App;
