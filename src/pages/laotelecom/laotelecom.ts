import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaotelecomPage');
  }
  SayHello(){
    console.log("Hello laotelecom");
  }
}
