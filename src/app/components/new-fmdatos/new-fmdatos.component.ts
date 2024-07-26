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
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      case: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    })
  }
 
  ngOnInit(): void {
  }

  async onSubmit() {
    
    if (this.formulario.valid) {
      console.log(this.formulario.value)
    const response = await this.fmDatosService.addFmDatos(this.formulario.value);
    console.log(response);
    this.formulario.reset()
    } else {
      
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
  
}
