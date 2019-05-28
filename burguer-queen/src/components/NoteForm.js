import React, {Component} from 'react';



class NoteForm extends Component {

addNote(){
  this.props.addNote(this.textInput.value);
  this.textInput.value="";
}

render(){
  return (
    <div className="NoteForm">
    <input
    ref={input => {this.textInput = input;}}
    type="text"/>
    <button
    onClick={()=> this.addNote()}
    >
    Pedido
    </button>
    </div>
  )
}
}

export default NoteForm;
