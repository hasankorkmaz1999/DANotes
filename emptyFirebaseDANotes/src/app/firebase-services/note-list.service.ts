import { Injectable, inject } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import { collectionData, Firestore, collection, doc, onSnapshot } from '@angular/fire/firestore';
import { elementAt, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteListService {

  trashNotes: Note[] = [];
  normalNotes: Note[] = [];

  unsubList;
  unsubSingle;



  items$;
  items;


  firestore: Firestore = inject(Firestore);

  constructor() {

    this.unsubList = onSnapshot(this.getNotesRef(),  (list) => {
      list.forEach(element => {
        console.log(element);
        
      })
    });


    this.unsubSingle = onSnapshot(this.getSingleDocRef("notes", "dasdasdsad"),  (element) => {

    });



    this.unsubSingle();

   
    this.items$ = collectionData(this.getNotesRef());
    this.items = this.items$.subscribe((list) =>{
      list.forEach(element => {
        console.log(element);
        
      });
    });
    this.items.unsubscribe();
  }

   getNotesRef(){
    return collection(this.firestore, 'notes');
 }



   getTrashRef(){
      return collection(this.firestore, 'trash');
   }

   getSingleDocRef(colId:string, docID:string) {
    return doc(collection(this.firestore, colId), docID);
   }


}
