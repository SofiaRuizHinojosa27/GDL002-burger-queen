import React from 'react';
import './App.css';



import Navigation from './components/navigation';
import Notes from './components/Notes';
import Orders from './components/orders';


const App = () => {


  return (
    <div className="App">
    <header className="App-header">
        <h1 className="display-1">
          BURGUER QUEEN <i className="fas fa-hamburger"></i>
        </h1>
    </header>

    <Navigation />

    <div className="containerBreakfast">
       <div className="breakfastContainer">
      <Orders/>
      </div>
       <div className="ordersContainer">
       <Notes/>
       </div>
    </div>
</div>

  );
}

export default App;
