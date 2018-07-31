import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PharmacyProvider } from '../../providers/pharmacy/pharmacy';

/**
 * Generated class for the PharmacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pharmacy',
  templateUrl: 'pharmacy.html',
})
export class PharmacyPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public pharmacyProvider: PharmacyProvider,
    public modalCtrl: ModalController
  ) {

  }

  ionViewDidLoad() {
    
  }

  viewPharmacy(pharmacy) {
    const modal = this.modalCtrl.create('PharmacyDetailPage', pharmacy);
    modal.present();
  }

}
