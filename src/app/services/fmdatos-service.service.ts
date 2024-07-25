import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import Fmdatos from '../interfaces/fmdatos.interface';

@Injectable({
  providedIn: 'root'
})
export class FmdatosServiceService {

  constructor(private firestore: Firestore) { }

  addFmDatos(fmdatos: Fmdatos){
    const fmDatosRef = collection(this.firestore, 'fmdatos');
    return addDoc(fmDatosRef, fmdatos);
  }
}
