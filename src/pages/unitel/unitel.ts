import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {CallNumber} from "@ionic-native/call-number";

/**
 * Generated class for the UnitelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unitel',
  templateUrl: 'unitel.html',
})
export class UnitelPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtr: AlertController,
              public call:CallNumber

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitelPage');
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
            const buypackage = "*209*" + packageNetCode + "#";
            this.call.callNumber(buypackage,true).then(()=>{
              alert1.dismiss();
            });
          }
        }
      ]
    });
    alert1.present();
  }
  // Call package
  RegisterCallSimPackage(packageCallCode:string){
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
            const buypackage = "*209*" + packageCallCode + "#";
            this.call.callNumber(buypackage,true).then(()=>{
              alert2.dismiss();
            });
          }
        }
      ]
    });
    alert2.present();
  }


  //Unitel call center
  CallCenter(){
    const Callalert = this.alertCtr.create({
      title: "ການໂທ",
      message: "ໂທຫາສູນບໍລິການຂອງຢູນີເທວບໍ?",
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
            const callcenterCode="109";
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
