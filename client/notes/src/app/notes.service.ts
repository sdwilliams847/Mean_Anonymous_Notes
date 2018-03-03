import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NotesService {

  constructor(private _http:HttpClient) { }

  all(cb){
    this._http.get('/server/notes')
    .subscribe(data=>cb(data));
  }

  newNote(addNote,cb){
    console.log("From notes.service "+addNote);
    this._http.post('/server/notes/new',addNote)
    .subscribe(data=>cb(data));
  }

}
