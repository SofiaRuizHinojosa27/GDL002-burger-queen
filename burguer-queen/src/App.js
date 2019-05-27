import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Waiter } from "./components/Waiter";
import { Kitchen } from "./components/Kitchen";
// import { NoMatch } from "./components/NoMatch";

// import Button from './components/Button';
// import Navigation from './components/navigation';
// import Notes from './components/Notes';
// import Orders from './components/orders';
// import Home from './components/Home';
// import Waiter from './components/Waiter';

const App = () => {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Waiter" component={Waiter} />
          <Route path="/Kitchen" component={Kitchen} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;

// <div className="App">
// <header className="App-header">
//     <h1 className="display-1">
//       BURGUER QUEEN <i className="fas fa-hamburger"></i>
//     </h1>
// </header>
//
// <div className="Nav-menu">
//   <nav className= "navbar navbar-dark bg-dark">
//     <Button name="Waiter"/>
//     <Button name="Kitchen"/>
//   </nav>
// </div>
//
// <div className="containerFood">
//    <div className="breakfastContainer">
//   <Orders/>
//   </div>
//    <div className="ordersContainer">
//    <Notes/>
//    </div>
// </div>
// </div>
// </div>
// <div className="Home">
// <Home/>
// </div>
// <div className="Waiter">
// <Waiter/>
// </div>
// </div>
// );
// }
