import React, {Component} from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import {Breakfast} from './Breakfast';
import {DailyMeals} from './DailyMeals';
import {Account} from './Account';

export class Waiter extends Component{
    state = {
        noTable:'',
        orders: [],
        numberTable:'',
        total: 0,
};

getTableNumber = (event) =>{
        this.setState({
          noTable: event.target.value
        });
}

addNumberTable = (numberTable) =>{
    //console.log(numberTable)
    this.setState({
     numberTable:numberTable
   })
}

addOrder = (item) => {
    this.setState({orders: [...this.state.orders, item]}, () => this.sumItemPrice(item.price))
}

sumItemPrice =(price) =>{
this.setState({total: this.state.total + price})
}

removeOrder = (index) => {
  let newTotal= this.state.orders[index].price;
     this.setState({orders: this.state.orders.filter((e,i)=> {return i !== index}), total:this.state.total - newTotal})
 }

render(){
const {noTable,orders,numberTable,total} =this.state;
    return(

    <div className="Waiter">

      <header className="App-header">
       <h1 className="display-1">BURGUER QUEEN <i className="fas fa-hamburger"></i></h1>
      </header>

      <div className="Nav-menu">
        <nav className= "navbar navbar-dark bg-dark">
          <Link className="btn btn-lg" to="/Kitchen"> Kitchen </Link>
          <Link  className="btn btn-lg" to="/"> Home </Link>
        </nav>
      </div>



      <div className="container-fluid">
        <div className="row">

            <Breakfast addOrder = {this.addOrder}/>
            <DailyMeals addOrder = {this.addOrder}/>
            <Account
             orders={orders}
             numberTable={numberTable}
             total = {total}
             removeOrder={this.removeOrder}
            />
        </div>
      </div>


    </div>
    );
}

}


export default Waiter;
