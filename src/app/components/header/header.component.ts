import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // isMenuOpen = false;
  // public urls : string[] = [
  //   'Inicio',
  //   'Transparencia',
  //   'Cafta',
  //   'Contacto'
  // ]
  // toggleMenu(): void {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }
  // constructor() { }
  // menu_icon_variable: boolean = false;
  // menuVariable: boolean = false;

  ngOnInit(): void {
  }
  // openMenu() {
  //   this.menuVariable =! this.menuVariable;
  //   this.menu_icon_variable =! this.menu_icon_variable;
  // }

  menuValue:boolean=false;
 menu_icon :string ='bi bi-list';
 openMenu(){
    this.menuValue =! this.menuValue ;
    this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
  }
   closeMenu() {
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
  }

}
