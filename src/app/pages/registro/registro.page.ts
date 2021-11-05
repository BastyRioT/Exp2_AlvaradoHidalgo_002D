import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesdatosService, Datos } from 'src/app/services/servicesdatos.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {



  data: Datos[] = [];
  newdata: Datos = <Datos>{};
  @ViewChild('myList') myList: IonList;

  constructor(private storageService: ServicesdatosService, private plt: Platform,
    private toasController: ToastController, private storage: Storage) {

    this.plt.ready().then(() => { this.loadDatos(); });

  }

  loadDatos() {
    this.storageService.getDatos().then(data => {
      this.data = data;

    });
  }


  addDatos() {
    this.newdata.id = Date.now();
    this.newdata.modified = Date.now();
    this.storageService.addDatos(this.newdata).then(d => {
      this.newdata = <Datos>{};
      this.showToast('Registro completado');
      this.loadDatos();
    });
  }

  updateDatos(data: Datos) {

    data.modified = Date.now();
    this.storageService.updateDatos(data).then(item => {
      this.showToast('Update data');
      this.myList.closeSlidingItems();
      this.loadDatos();
    })

  }

  deleteDatos(data: Datos) {
    this.storageService.deleteDatos(data.id).then(item => {
      this.showToast('! Deleted data');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });

  }


  async showToast(msg) {
    const toast = await this.toasController.create({
      message: msg,
      duration: 2000

    });
    toast.present();

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit');
    console.log(this.newdata);
  }




}
