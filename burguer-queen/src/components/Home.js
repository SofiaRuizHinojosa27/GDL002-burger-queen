import React  from 'react';
import '../App.css';
import imgWelcome  from  '../logo2.jpg';
import { Link } from "react-router-dom";


export const Home = () => {

  return (
    <div className="App">
    <header className="App-header">
        <h1 className="display-1">
          BURGUER QUEEN <i className="fas fa-hamburger"></i>
        </h1>
    </header>

    <div className="Nav-menu">
      <nav className="navbar navbar-dark bg-dark">
         <Link to="/Waiter" className="btn btn-lg"> Waiter </Link>
         <Link to="/Kitchen" className="btn btn-lg"> Kitchen </Link>
      </nav>
    </div>


   <div className="Welcome">
   <img src={imgWelcome} className="img-fluid" alt="welcome"/>
   </div>
  </div>
);
}



export default Home;
