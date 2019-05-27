import React, {Component} from 'react';
import Button from './Button';

class Navigation extends Component {
  render(){
    return (
      <nav className= "navbar navbar-dark bg-dark">
      <Button name='Mesero'/>
      <Button name='Cocina'/>
      </nav>
    )
  }
}

export default Navigation;
