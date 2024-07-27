import { Component, OnInit, Input } from '@angular/core';
import { FmdatosServiceService } from 'src/app/services/fmdatos-service.service';

@Component({
  selector: 'app-fmdatos-list',
  templateUrl: './fmdatos-list.component.html',
  styleUrls: ['./fmdatos-list.component.scss']
})
export class FmdatosListComponent implements OnInit {
  
  datos : any[] = []; // Arreglo para almacenar los datos cargados desde el servicio


  // Constructor que inyecta el servicio FmdatosServiceService
  constructor(private fmDatosService: FmdatosServiceService) { 
    
  }
// Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.cargarFmDatos();  // Llama al método para cargar los datos
  }
  
  async cargarFmDatos() {
    // Método asincrónico para cargar los datos desde el servicio
    try {
      this.datos = await this.fmDatosService.getFmDatos(); // Obtiene los datos utilizando el método getFmDatos() del servicio
    } catch (error) {
      console.error('Ocurrió un error al cargar los datos:', error);  // Si ocurre un error, muestra un mensaje en la consola
    }
  }


  

}
