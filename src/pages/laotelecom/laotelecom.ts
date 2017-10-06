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


  // Sim net package
  RegisterNetSimPackage(packageNetCode:string){
    const alert1 = this.alertCtr.create({
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
            const buypackage = "*131*" + packageNetCode + "#";
            this.call.callNumber(buypackage,true).then(()=>{
               alert1.dismiss();
            });
          }
        }
      ]
    });
    alert1.present();
  }


  //Wifi package
  RegisterWifiPackage(packageWifiCode){
    const alert2 = this.alertCtr.create({
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
            const buypackage = "*155*3*" + packageWifiCode + "#";
            this.call.callNumber(buypackage,true).then(()=>{
              alert2.dismiss();
            });
          }
        }
      ]
    });
    alert2.present();
  }

  // Call package
  RegisterCallSimPackage(packageCallCode:string){
    const alert3 = this.alertCtr.create({
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
            const buypackage = "*188*" + packageCallCode + "#";
            this.call.callNumber(buypackage,true).then(()=>{
              alert3.dismiss();
            });
          }
        }
      ]
    });
    alert3.present();
  }

  // Monthl call package

  RegisterMonthlySimPackage(packageMonthlycode:string){

    const alert4 = this.alertCtr.create({
      title: "Package",
      message: "ສະໝັກເພັກເກັກນີ້ບໍ ?",
      buttons: [
        {
         text:"ຍົກເລີກ",
          handler:()=>{
          // Cancel code here
          }
        },
        {
         text:"ສະໝັກ",
          handler:()=>{
            const Monthlypackage = "*111*"+ packageMonthlycode +"#";
            this.call.callNumber(Monthlypackage,true).then(()=>{
              alert4.dismiss();
            });
          }
        }
      ]
    });
    alert4.present();
  }

//  If uaser click button on LTC service page it will process this function as call to ltc call center service
  CallCenter(){
    const Callalert = this.alertCtr.create({
      title: "ການໂທ",
      message: "ທ່ານຕ້ອງການໂທຫາສູນບໍລິການຂອງລາວໂທລະຄົມບໍ ?",
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
            const callcenterCode="121";
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











