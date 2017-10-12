import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {SMS} from '@ionic-native/sms';
import {CallNumber} from "@ionic-native/call-number";

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
    public sms: SMS,
    public call:CallNumber
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
      message: "ສະໝັກເພັກເກັກວາຍຟາຍລ໌ນີ້ບໍ?",

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


  //  If uaser click button on ETL service page it will process this function as call to ETL call center service
  CallCenter(){
    const Callalert = this.alertCtrl.create({
      title: "Call center",
      message: "ຕິດຕໍ່ສູນບໍລິການຂອງອີທີແອລ໌ບໍ?",
      buttons: [
        {
          text:"ຍົກເລີກ",
          handler:()=>{
            // Cancel code here
          }
        },
        {
          text:"ໂທອອກ",
          handler:()=>{
            const callcenterCode="135";
            this.call.callNumber(callcenterCode,true).then(()=>{
              Callalert.dismiss();
            });
          }
        }
      ]
    });
    Callalert.present();
  }
}
