import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, doc, deleteDoc, getDocs } from '@angular/fire/firestore';
import { collectionData } from 'rxfire/firestore';
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


  async getFmDatos(): Promise<any[]> {
    const fmDatosRef = collection(this.firestore, 'fmdatos');
    const querySnapshot = await getDocs(fmDatosRef);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

  }
  

}
