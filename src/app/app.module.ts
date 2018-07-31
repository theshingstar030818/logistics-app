import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ParseProvider } from '../providers/parse/parse';
import { PharmacyProvider } from '../providers/pharmacy/pharmacy';
import { AuthProvider } from '../providers/auth/auth';
import { SideMenuComponent } from '../components/side-menu/side-menu';

@NgModule({
  declarations: [
    MyApp,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SideMenuComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ParseProvider,
    PharmacyProvider,
    AuthProvider
  ]
})
export class AppModule {}
