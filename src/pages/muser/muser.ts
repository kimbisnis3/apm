import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AddUserPage } from '../add-user/add-user';

/**
 * Generated class for the MuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-muser',
  templateUrl: 'muser.html',
})
export class MuserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MuserPage');
  }

  oke() {
    console.log('okokeokoek');
  }

  toAdd(){
    this.navCtrl.push(AddUserPage);
  }

}
