import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FmdatosServiceService } from 'src/app/services/fmdatos-service.service';

@Component({
  selector: 'app-new-fmdatos',
  templateUrl: './new-fmdatos.component.html',
  styleUrls: ['./new-fmdatos.component.scss']
})
export class NewFmdatosComponent implements OnInit {
 
  formulario: FormGroup;
 
  constructor(
    private fmDatosService: FmdatosServiceService
  ) { 
    this.formulario = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      case: new FormControl(),
      message: new FormControl()
    })
  }
 
  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.fmDatosService.addFmDatos(this.formulario.value);
    console.log(response);
  }
}
