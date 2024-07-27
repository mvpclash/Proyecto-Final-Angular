import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { TransparenciaComponent } from './pages/transparencia/transparencia.component';
import { CaftaComponent } from './pages/cafta/cafta.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


//Aquí se definen las rutas de los componenentes a los que me va dirigir el menú del sitio
const routes: Routes = [
  {path: 'index', component:IndexComponent},
  {path: 'transparencia', component:TransparenciaComponent},
  {path: 'cafta', component:CaftaComponent},
  {path: 'contacto', component:ContactoComponent},
  {
    //Aquí defijno la página o componente por defecto
    path: '**',
    redirectTo: '/index',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
