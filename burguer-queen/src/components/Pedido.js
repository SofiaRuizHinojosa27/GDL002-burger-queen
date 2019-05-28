import React, {Component} from 'react';
import './Note.css';
import NoteForm from './NoteForm';
// import * as firebase from 'firebase';
// import {DB_config} from '../config/config';
// import 'firebase/database';
// import Orders from './orders';


class Pedido extends Component {
  constructor(props){
  super(props);
  this.state = {
   orders: [

   ]
};
// this.app= firebase.initializeApp(DB_config);
// this.db = this.app.database().ref().child('orders');
this.addOrder = this.addOrder.bind(this);
}

// componentDidMount(){
//  const { notes } = this.state;
//  this.db.on('child_added', ss =>{
//    notes.push({
//      noteId: ss.key,
//      noteContent:ss.val().noteContent
//      // noteId: ss.itemId,
//      // food:ss.item,
//      // price: ss.price
//
//    })
//    this.setState({notes});
//  });
// }

addOrder = (item) => {
  let {orders} = this.state;
  orders.push({
    itemId: orders.length + 1,
    comanda: item
  });
  this.setState({orders});
}


render(){
  return (
    <div className="notesContainer">

    <div className="notesHeader">
    <h1>Orden<i className="fas fa-pencil-alt"></i></h1>
    </div>
    <div className="notesBody">
    <ul>
    {
      this.state.orders.map(item =>{
      return(
          <li className="Note" key={item.itemId}>
          <span onClick={this.removeNote}>
          <i className="fas fa-trash-alt"></i></span>
          <p>{item.comanda}</p>
          </li>
      )
    })}
    </ul>

    </div>

    <div className="notesFooter">
    <NoteForm addOrder={this.addOrder}/>
    </div>

    </div>
    );
  };
};

export default Pedido;
