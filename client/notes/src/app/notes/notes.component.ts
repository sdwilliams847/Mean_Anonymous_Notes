import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NotesService } from '../notes.service';



@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css','./bootstrap.min.css']
})
export class NotesComponent implements OnInit {
  private notes: any;
  private addNote: any;

  constructor(private _ns:NotesService, private _router:Router) { }

  init(){
    this.notes = [];
    this.addNote = {
      note: ""
    };
  }

  ngOnInit() {
    this.init();
    this.all();
  }

  all(){
    let observable = this._ns.all((data)=>{
      if (data.errors){

      }else{
        this.notes = data;
        console.log(this.notes);
      }
    })

  }
  newNote(){
    this._ns.newNote(this.addNote,(data)=>{
      if(data.errors){
        console.log(data.errors);
      }
      else{
        console.log(data);
        this.init();
      }
    });
  }
}
