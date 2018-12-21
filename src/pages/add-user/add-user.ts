import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {

  input: any = {
    nama: '',
    alamat: ''
}
  toaster: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private http: HTTP) {
    this.toaster = this.toastCtrl.create({
      message: 'Berhasil Disimpan',
      duration: 3000,
      position: 'top'
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUserPage');
  }

  simpan(){
      // this.toaster.setMessage('Harus Di Isi');
      // this.toaster.present();
      this.http.get('http://localhost/apiapm/user/getUser', {}, {})
      .then(data => {
        console.log("sukses");
        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {
        console.log("catcherror");
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
    
  }

  setValue(v){
    console.log(v);
    this.input.alamat = v;
  }

}
