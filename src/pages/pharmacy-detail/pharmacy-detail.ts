import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PharmacyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pharmacy-detail',
  templateUrl: 'pharmacy-detail.html',
})
export class PharmacyDetailPage {

  public isEdit: boolean = false;
  public pharmacy: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.pharmacy = navParams.data;
  }

  set(event, object) {
    object.set(event._elementRef.nativeElement.attributes.name.value, event.value).save();
    console.log(event._elementRef.nativeElement.attributes.name.name);
  }

}
