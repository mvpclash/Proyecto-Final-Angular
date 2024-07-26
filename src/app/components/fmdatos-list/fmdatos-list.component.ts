import { Component, OnInit, Input } from '@angular/core';
import FmDatos from 'src/app/interfaces/fmdatos.interface';
import { FmdatosServiceService } from 'src/app/services/fmdatos-service.service';

@Component({
  selector: 'app-fmdatos-list',
  templateUrl: './fmdatos-list.component.html',
  styleUrls: ['./fmdatos-list.component.scss']
})
export class FmdatosListComponent implements OnInit {
  
  datos : FmDatos[];

 
  constructor(private fmDatosService: FmdatosServiceService) { 
    this.datos = [{
      name: '',
      email: '',
      case: '',
      message: ''
    }];
  }

  ngOnInit(): void {
    this.fmDatosService.getFmDatos().subscribe(datos =>{
      console.log(datos);
      this.datos = datos;
    })
  }


  async onClickDelete(fmDato: FmDatos) {
    const response = await this.fmDatosService.deleteFmDatos(fmDato);
    console.log(response);
  }

  

}
