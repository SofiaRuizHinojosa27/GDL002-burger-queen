import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Waiter } from "./components/Waiter";
import { Kitchen } from "./components/Kitchen";


class App extends Component {
  render() {
    return (
      <HashRouter basename="/">

      <div className="App">
      <Route exact path="/" render={()=><Home/>} />
      <Route path="/Waiter" render={()=><Waiter/>}/>
      <Route path="/Kitchen" render={()=><Kitchen/>}/>
      </div>

      </HashRouter>
          );
        }
      }

export default App;
