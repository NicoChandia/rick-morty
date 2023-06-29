import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor() {}
}

//ionic build (para crear el w w w) 
//npm i @capacitor/android : (instalo libreria para android)
//npx cap add android : (añado la plataforma de android) (carpeta android)
//ERRORES solucion:    npm install @capacitor/core @capacitor/cli       npx cap init 
//npx cap open android: (abro aplicacion en android studio)