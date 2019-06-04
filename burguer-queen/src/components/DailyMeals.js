import React, {Component} from 'react';
import {menuMeals} from './menuMeals.json';
import '../App.css';


export class DailyMeals extends Component{
    constructor(props){
    super(props);
    this.state = {
    menuMeals
};
}

render(){
    const {menuMeals}= this.state;
    return(
    <div className="dailyMeals">

    <div className="containerFood">

    <div className="menuMeals">
    {menuMeals.map((item, index) =>{
    return(
    <div className="card-group">
        <div className="card" key={index}>
        <div className="card-body">
        <h5 className="card-title">{item.item}</h5>
        <p className="card-text">Precio ${item.price}</p>
        <button className="btn btn-sm" onClick= {()=>this.props.addOrder(item)}>Agregar</button>
        </div>
      </div>
    </div>
    )
  })}
</div>
</div>
</div>
    );
    }
}

export default DailyMeals;
