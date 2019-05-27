import React, {Component} from 'react';
import NoteForm from './NoteForm';



class OrderFood extends Component {
  constructor(props){
  super(props);
  this.state= {
  food:[
    {itemId:1, item: "Hamburguesa simple",price: 10},
    {itemId:2, item: "Hamburguesa doble",price: 15},
    {itemId:3, item: "Papas fritas",price: 5},
    {itemId:4, item: "Aros de cebolla", price: 5},
    {itemId:5, item: "Agua 500ml", price: 5},
    {itemId:6, item: "Agua 750ml", price: 7},
    {itemId:7, item: "Refresco 500ml", price: 5},
    {itemId:8, item: "Refresco 750ml", price: 5}
  ]
 };
}

render() {
  return(
    <div className="menuContainer">

    <div className="menuFood">
    {this.state.food.map(item =>{
      return(
          <div className="card-group">
          <div className="card">
          <div className="card-body">
          <h5 className="card-title" key={item.itemId}>{item.item}</h5>
          <p className="card-text">Precio ${item.price}</p>
          <button className="btn btn-primary" onClick= {()=>this.handleRemove(this.itemId)}>
          Agregar</button>
          </div>
          </div>
          </div>

      )
    })}
    </div>

    </div>
  );
};
};

export default OrderFood;
