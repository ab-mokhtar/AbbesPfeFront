import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  
  noteText: string = '';
  savedNotes: string[] = [];

  ngOnInit() {
    const savedNotesJSON = localStorage.getItem('notes');
    if (savedNotesJSON) {
      this.savedNotes = JSON.parse(savedNotesJSON);
    }
  }

  saveNote() {
    this.savedNotes.push(this.noteText);
    localStorage.setItem('notes', JSON.stringify(this.savedNotes));
    alert('Note saved successfully!');
    this.noteText = ''; // Clear the note text after saving
  }
  deleteAll(){
    localStorage.clear();
    window.location.reload()
  }
  deleteNote(index: number) {
    this.savedNotes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(this.savedNotes));
    alert('Note deleted successfully!');
  }
}
