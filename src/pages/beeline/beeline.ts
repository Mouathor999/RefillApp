import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {SMS} from '@ionic-native/sms';

/**
 * Generated class for the BeelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beeline',
  templateUrl: 'beeline.html',
})
export class BeelinePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public sms: SMS
  ) {
  }


  refreshPage(refresh){
    setTimeout(() => {
      refresh.complete();
    }, 3000);
  }

  registerSimPackage(packageCode: string){
    const alert = this.alertCtrl.create({
      title: "Package",
      message: "ສະໝັກເພັກເກັກນີ້ບໍ?",
      buttons: [

        /** Cancle logic */
        {
          text: "ຍົກເລີກ",
          handler: () => {
            //Coding logic here
          }
        },

        /** OK logic */
        {
          text: "ສະໝັກ",
          handler: () => {
            /** Send message code logic on fuction bellow*/
            const smsOption = {
              replaceLineBreaks: false,
              android: {
                intent: 'INTENT'
              }
            };
            this.sms.send("234", packageCode, smsOption).then(() => {
              alert.dismiss();
            });
          }
        }
      ]
    });
    alert.present();
  }
}
