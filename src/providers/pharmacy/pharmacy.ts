import { Injectable } from '@angular/core';
// Parse
import { Parse } from 'parse';

/*
  Generated class for the PharmacyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PharmacyProvider {

  pharmacies: Array<any> = []

  constructor() {
    this.getPharmacies()
  }

  public getPharmacies() {
    let me = this;
    return new Promise((resolve, reject) => {
      var Pharmacy = Parse.Object.extend("Pharmacy");
      var query = new Parse.Query(Pharmacy);
      query.include("address");
      query.find({
        success: function(pharmacies) {
          console.log(pharmacies)
          me.pharmacies = pharmacies;
          resolve(pharmacies)
        },
        error: function(object, error) {
          console.log(error);
        }
      });
    })
  }

}
