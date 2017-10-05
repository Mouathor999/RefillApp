import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {CallNumber} from '@ionic-native/call-number';

/**
 * Generated class for the LaotelecomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laotelecom',
  templateUrl: 'laotelecom.html',
})
export class LaotelecomPage {
title="Hello";
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtr:AlertController,
              public call: CallNumber
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaotelecomPage');
  }

  //Refresher function

  refreshPage(refresh){
    setTimeout(() => {
      refresh.complete();
    }, 3000);
  }



  RegisterSimPackage(packageCode:string){
    const alert = this.alertCtr.create({
      title:"Package",
      message:"ສະໝັກເພັກເກັກນີ້ບໍ ?",
      buttons: [
        {
          text:"ຍົກເລີກ",
          handler:()=>{
            // cancel coding here
          }
        },
        {
          text:"ສະໝັກ",
          handler:()=>{
            const buypackage = "*131*" + packageCode + "#";
            this.call.callNumber(buypackage,true).then(()=>{
               alert.dismiss();
            });
          }
        }
      ]
    });
    alert.present();
  }
}
