import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {SMS} from '@ionic-native/sms';

/**
 * Generated class for the EtlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etl',
  templateUrl: 'etl.html'
})
export class EtlPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public sms: SMS
  ) {
  }

  ionViewDidLoad() {
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
              this.sms.send("333", packageCode, smsOption).then(() => {
                alert.dismiss();
              });
            }
          }
        ]
      });
      alert.present();
  }

  registerWifiPackage(packageCode: string){

    const alert = this.alertCtrl.create({
      title: "Package",
      message: "ສະໝັກເພັກເກັກນີ້ບໍ?",

      buttons: [

      /** Cancle logic */
        {
          text: "ຍົກເລີກ",
          handler: () => {

          }
        },

        /** OK logic */
        {
          text: "ສະໝັກ",
          handler: () => {
            const smsOption = {
              replaceLineBreaks: false,
              android: {
                intent: 'INTENT'
              }
            };
            this.sms.send("1131", packageCode, smsOption).then(() =>{
              alert.dismiss();
            });
          }
        }
      ]
    });
    alert.present();
  }
}
