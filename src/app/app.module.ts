import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ArticleComponent } from './components/article/article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TransparenciaComponent } from './pages/transparencia/transparencia.component';
import { CaftaComponent } from './pages/cafta/cafta.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CaftaContenidoComponent } from './components/cafta-contenido/cafta-contenido.component';
import { TransparenciaContenidoComponent } from './components/transparencia-contenido/transparencia-contenido.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NewFmdatosComponent } from './components/new-fmdatos/new-fmdatos.component';
import { FmdatosListComponent } from './components/fmdatos-list/fmdatos-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    SidebarComponent,
    ArticleComponent,
    TransparenciaComponent,
    CaftaComponent,
    ContactoComponent,
    CaftaContenidoComponent,
    TransparenciaContenidoComponent,
    NewFmdatosComponent,
    FmdatosListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    //Imports de Firebase se generan al instalar las librerias del mismo
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()), 
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
