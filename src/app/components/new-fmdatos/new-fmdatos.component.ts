import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FmdatosServiceService } from 'src/app/services/fmdatos-service.service';

@Component({
  selector: 'app-new-fmdatos',
  templateUrl: './new-fmdatos.component.html',
  styleUrls: ['./new-fmdatos.component.scss']
})
export class NewFmdatosComponent implements OnInit {
  // Declaración de la variable formulario como FormGroup
  formulario: FormGroup;
 
  constructor(
    private fmDatosService: FmdatosServiceService
  ) { 
     // Inicialización del formulario con controles y validadores
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
    // Método que se ejecuta al enviar el formulario
    if (this.formulario.valid) {
      // Si el formulario es válido (todos los campos cumplen las validaciones)
      console.log(this.formulario.value) // Muestra los valores del formulario en la consola
    const response = await this.fmDatosService.addFmDatos(this.formulario.value); // Llama al servicio fmDatosService para agregar los datos al backend Firestore
    console.log(response); // Muestra la respuesta del servicio en la consola
    this.formulario.reset() // Reinicia los valores del formulario
    } else {
      
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
  
}
