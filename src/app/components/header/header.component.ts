import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 

  ngOnInit(): void {
  }
  

  menuValue:boolean=false; // Variable para controlar el estado del menú (abierto o cerrado)
 menu_icon :string ='bi bi-list'; // Variable para almacenar el ícono del menú (inicialmente, muestra el ícono de lista)
 openMenu(){
  // Método para abrir el menú
    this.menuValue =! this.menuValue ; // Cambia el valor de menuValue (si estaba cerrado, ahora estará abierto, y viceversa)
    
    this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list'; // Actualiza el ícono del menú según el estado (abierto o cerrado)
  }
   closeMenu() {
    // Método para cerrar el menú
    this.menuValue = false; // Establece el valor de menuValue como falso (menú cerrado)
    this.menu_icon = 'bi bi-list'; // Restaura el ícono del menú a la versión de lista
  }

}
