import { Component, OnInit, Input } from '@angular/core';
import FmDatos from 'src/app/interfaces/fmdatos.interface';
import { FmdatosServiceService } from 'src/app/services/fmdatos-service.service';

@Component({
  selector: 'app-fmdatos-list',
  templateUrl: './fmdatos-list.component.html',
  styleUrls: ['./fmdatos-list.component.scss']
})
export class FmdatosListComponent implements OnInit {
  
  datos : any[] = [];

 
  constructor(private fmDatosService: FmdatosServiceService) { 
    
  }

  ngOnInit(): void {
    this.cargarFmDatos();
  }
  
  async cargarFmDatos() {
    try {
      this.datos = await this.fmDatosService.getFmDatos();
    } catch (error) {
      console.error('Ocurrió un error al cargar los datos:', error);
    }
  }


  

}
