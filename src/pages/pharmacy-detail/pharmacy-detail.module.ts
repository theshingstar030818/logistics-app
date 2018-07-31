import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PharmacyDetailPage } from './pharmacy-detail';

@NgModule({
  declarations: [
    PharmacyDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PharmacyDetailPage),
  ],
})
export class PharmacyDetailPageModule {}
