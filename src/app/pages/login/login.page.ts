import { Component, OnInit } from '@angular/core';
import { ServicesdatosService, Datos } from 'src/app/services/servicesdatos.service';
import { Storage } from '@ionic/storage';
import { Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  data: Datos[] = [];
  loaddata: Datos = <Datos>{};

  constructor(private storageService: ServicesdatosService, private plt: Platform,
    private toasController: ToastController, private storage: Storage) { }

  ngOnInit() {
  }


  onSubmit() {
    console.log('submit');
    console.log(this.loaddata)
  }
}
