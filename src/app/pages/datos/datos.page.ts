import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { ServicesdatosService, Datos } from 'src/app/services/servicesdatos.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  data: Datos[] = [];
  newdata: Datos = <Datos>{};
  @ViewChild('myList') myList: IonList;

  constructor(private storageService: ServicesdatosService, private plt: Platform,
    private toasController: ToastController) {

    this.plt.ready().then(() => { this.loadDatos(); });

  }

  loadDatos() {
    this.storageService.getDatos().then(data => {
      this.data = data;

    });
  }

  updateDatos(data: Datos) {

    data.modified = Date.now();
    this.storageService.updateDatos(data).then(item => {
      this.showToast('Usuario actualizado');
      this.myList.closeSlidingItems();
      this.loadDatos();
    })

  }

  deleteDatos(data: Datos) {
    this.storageService.deleteDatos(data.id).then(item => {
      this.showToast('Usuario eliminado');
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
}
