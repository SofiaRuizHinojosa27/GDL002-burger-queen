import React, {Component} from 'react';
import './Note.css';
import NoteForm from './NoteForm';
import * as firebase from 'firebase';
import {DB_config} from '../config/config';
import 'firebase/database';
import Orders from './orders';


class Notes extends Component {
  constructor(props){
  super(props);
  this.state = {
   notes: [

   ]
};
this.app= firebase.initializeApp(DB_config);
this.db = this.app.database().ref().child('orders');
this.addNote = this.addNote.bind(this);
this.removeNote = this.removeNote.bind(this);
}

componentDidMount(){
 const { notes } = this.state;
 this.db.on('child_added', ss =>{
   notes.push({
     noteId: ss.key,
     noteContent:ss.val().noteContent
     // noteId: ss.itemId,
     // food:ss.item,
     // price: ss.price

   })
   this.setState({notes});
 });
}

addNote (note){
// let {notes} = this.state;
// notes.push({
//   noteId: notes.length +1,
//   noteContent: note
// });
// this.setState({notes});
this.db.push().set({noteContent: note});
}

removeNote(note){
  this.db.remove({noteId:note});
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
      this.state.notes.map(note =>{
      return(
          <li className="Note" key={note.noteId}>
          <span onClick={this.removeNote}>
          <i className="fas fa-trash-alt"></i></span>
          <p>{note.noteContent}</p>
          </li>
      )
    })}
    </ul>

    </div>

    <div className="notesFooter">
    <NoteForm addNote={this.addNote}/>
    </div>

    </div>
    );
  };
};

export default Notes;
