import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './styles/App.css';
import MainPage from "./components/MainPage";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route path="/SearchResult" component={SearchResult}/>
    </Switch>
    </Router>
   
  );
}

export default App;
