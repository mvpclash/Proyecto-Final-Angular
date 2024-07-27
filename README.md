# Video de Presentación

https://drive.google.com/file/d/1-mcNJrLuPQ2c6mBxmgIVdBDuSPJXQZ2K/view?usp=sharing

El enlace está público

# Instrucciones de Inicio

ejecutar npm install para instalar todas las dependencias del proyecto.

# Si las dependencias de firebase no se instalaron ejecutar lo siguiente

npm i firebase

npm npm install -g firebase-tools@11.23.1   Se especifica versión porque es la compatible con la versión instalada de node js

en el archivo enviroment agregar lo siguiente:

export const environment = {

  firebase: {

    projectId: 'proyecto-back-angular',

    appId: '1:667556518668:web:58ad56324985e698430729',

    storageBucket: 'proyecto-back-angular.appspot.com',

    apiKey: 'AIzaSyAmwjE8U4MPyF3uBiQ2xYR0AM23lKkfKds',

    authDomain: 'proyecto-back-angular.firebaseapp.com',

    messagingSenderId: '667556518668',

    measurementId: 'G-SKZ95E7TLS',

  },

  production: false

};

# Agregar al app.module.ts para Configurar Firebase
 en imports
 provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())

E importar 
import { provideDatabase,getDatabase } from '@angular/fire/database';

import { provideFirestore,getFirestore } from '@angular/fire/firestore';

# Si la configuración es correcta:

Utilizar npm start para compilar y utilizar el servidor

# Estructura del Proyecto

Pages: Index, Transparencia, CAFTA y Contacto

Servicios: fmdatos-service donde tengo configurado el servicio para almacenar datos en firebase, y el otro para llamar los datos del firebase

Interfaces o Modelos: fmdatos

Componentes:article: en este agrego el contenido de articulos para la página de inicio y lo agrego en la page de index

            sidebar: en este agregue el contenid ode lsidebar, y lo agrego en las respectivas pages para que sea visualizado que en este caos son contacto e inicio
            
            header: en este componente agregú el menú principal y se establecieron los metodos para cuando sea menú responsivo y llamo las rutas que definí en el app routing, y agregué el logo. Este componente lo llamo desde el app component.
            
            footer: Pie de Página, también se definió en el app component
            
            new-fmdatos: En este componente se define el método para guardar los datos en el formulario y definir las varibles del mismo.
            
            fmdatos-list: En este componente se define el método para cargar los datos utilizando el servicio de fmdatos-service, que ahi se encuentra el método get para traer los datos de la base 
            
            cafta-contenido: Acá se agrega el contenido que se refleja en la página de CAFTA
            
            transparencia-contenido: Acá se agrega el contenido que se refleja en la página de Tranasparencia

# Instrucciones de uso

El sitio consta de 4 páginas: Inicio, Trasnparencia, CAFTA y Contacto, se puede navegar entre ellas utilizando el menú definido en el header, 

Inicio: Me muestra las noticias de SETRASS y tiene su barra lateral para navegar a otros sitios de interés(fake)

Transparencia: Puedo acceder a la plataforma SIELHO desde un botón definido en esa página, y puedo visualizar el apartado de transparencia del SETRASS

CAFTA: En esta se publica documentación e información relevante relacionado a CAFTA

Contacto: Se muestra el formulario de contacto, en el cual pueden escribir para comunicarse  para despejar dudas, consultas y pedir soporte acá se utiliza el método de guardar datos definido en el servicio. a su vez se visualizan esos registros almacenados,  acá se utiliza el get definido en el servicio.






# IntroAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


