import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs } from '@angular/fire/firestore';
import Fmdatos from '../interfaces/fmdatos.interface';




@Injectable({
  providedIn: 'root'
})
export class FmdatosServiceService {

  constructor(private firestore: Firestore) { }
/**
   * Agrega un nuevo objeto Fmdatos a la colección 'fmdatos'.
   * param fmDatos El objeto Fmdatos que se va a agregar.
   * returns Una promesa que se resuelve cuando se completa la operación.
   */
  addFmDatos(fmDatos: Fmdatos){
    const fmDatosRef = collection(this.firestore, 'fmdatos');
    return addDoc(fmDatosRef, fmDatos);
  }

/**
   * Obtiene todos los objetos Fmdatos de la colección 'fmdatos'.
   * returns Una promesa que se resuelve con un arreglo de objetos Fmdatos.
   */
  async getFmDatos(): Promise<any[]> {
    const fmDatosRef = collection(this.firestore, 'fmdatos');
    const querySnapshot = await getDocs(fmDatosRef);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

  }
  

}
