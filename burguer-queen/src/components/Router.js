import './App.css';
import {BrowserRouter as Router, Route, Switch} from'react-router-dom';
import {Home} from './components/Home';
import {Waiter} from './components/waiter';
import {Order} from './components/orders';
import {NoMatch} from './components/NoMatch';





const Router = () => {
return (
    <div className="App">
    <Router>
       <Switch>
         <Route exact path = './' component= {Home}/>
         <Route path = '/waiter' component= {Waiter}/>
         <Route path = '/orders' component= {Order}/>
         <Route component={NoMatch}/>
       </Switch>
    </Router>
    </div>
    <div className="App">
    <header className="App-header">
        <h1 className="display-1">
          BURGUER QUEEN <i className="fas fa-hamburger"></i>
        </h1>
    </header>
    </div>

  );
}

export default Router;
