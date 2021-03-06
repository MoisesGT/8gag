import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SubirPage } from '../pages/subir/subir';

//Plugins
import { Camera } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';


//Pipes
import { PipesModule } from '../pipes/pipes.module';
//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CargaArchivoProvider } from '../providers/carga-archivo/carga-archivo';


export const firebaseConfig = {
  apiKey: "AIzaSyAljWVA5R9-onznuIhhWDFDZTkkV5vtnKc",
  authDomain: "gag-c70f2.firebaseapp.com",
  databaseURL: "https://gag-c70f2.firebaseio.com",
  projectId: "gag-c70f2",
  storageBucket: "gag-c70f2.appspot.com",
  messagingSenderId: "307837438249"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SubirPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SubirPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    Camera,
    SocialSharing,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CargaArchivoProvider
  ]
})
export class AppModule { }
