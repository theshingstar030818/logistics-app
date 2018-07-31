import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { LoginComponent } from '../../components/login/login';

@NgModule({
  declarations: [
    HomePage,
    LoginComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  entryComponents: [

  ]
})
export class HomePageModule {}
