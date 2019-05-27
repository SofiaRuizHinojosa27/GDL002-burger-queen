import React  from 'react';
import '../App.css';
import imgWelcome  from  '../logo2.jpg'

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
         <a className="btn btn-lg" href="./Waiter">Waiter</a>
         <a className="btn btn-lg" href="./Kitchen">Kitchen</a>
      </nav>
    </div>


   <div className="Welcome">
   <img src={imgWelcome} className="img-fluid"/>
   </div>
  </div>
);
}



export default Home;
