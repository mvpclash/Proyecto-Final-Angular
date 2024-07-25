import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import Fmdatos from '../interfaces/fmdatos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FmdatosServiceService {

  constructor(private firestore: Firestore) { }

  addFmDatos(fmDatos: Fmdatos){
    const fmDatosRef = collection(this.firestore, 'fmdatos');
    return addDoc(fmDatosRef, fmDatos);
  }

  getFmDatos(): Observable<Fmdatos[]> {
    const fmDatosRef = collection(this.firestore, 'fmdatos');
    return collectionData(fmDatosRef, { idField: 'id' }) as Observable<Fmdatos[]>;
  }

  deleteFmDatos(fmDatos: Fmdatos) {
    const fmDatosRef = doc(this.firestore, `fmdatos/${fmDatos.id}`);
    return deleteDoc(fmDatosRef);
  }


}
