import React, {Component} from 'react';
import {menuBreakfast} from './menuBreakfast.json';
import '../App.css';


export class Breakfast extends Component{
    constructor(props){
    super(props);
    this.state = {
    menuBreakfast
};
}

render(){
    const {menuBreakfast}= this.state;
    return(
    <div className="breakfast">

    <div className="containerFood">

    <div className="menuBreakfast">
    {menuBreakfast.map((item,index) =>{
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

export default Breakfast;
