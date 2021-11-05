import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

export interface Datos {
  id: number;
  modified: number;
  user: string,
  name: string,
  email: string,
  pass: string
}

const ITEMS_KEY = 'my-datos';

@Injectable({
  providedIn: 'root'
})
export class ServicesdatosService {

  private _storage: Storage;

  constructor(private storage: Storage, private plt: Platform) {
    this.init();
  }

  //definimos en un método la creación del almacenamiento
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }


  addDatos(dato: Datos): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((datos: Datos[]) => {
      if (datos) {
        datos.push(dato);
        return this.storage.set(ITEMS_KEY, datos);
      } else {
        return this.storage.set(ITEMS_KEY, [dato]);
      }

    })
  }

  //Nos permite obtener la información almacenada en el storage 
  //por medio de sus keys 

  getDatos(): Promise<Datos[]> {
    return this.storage.get(ITEMS_KEY);
  }


  //actualizar información de un objeto 
  updateDatos(dato: Datos): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((datos: Datos[]) => {
      if (!datos || datos.length == 0) {
        return null;
      }
      let newDato: Datos[] = [];
      for (let i of datos) {
        if (i.id === dato.id) {
          newDato.push(dato);
        }
        else {
          newDato.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, newDato);
    });
  }

  //Eliminar
  deleteDatos(id: number): Promise<Datos> {
    return this.storage.get(ITEMS_KEY).then((datos: Datos[]) => {
      if (!datos || datos.length === 0) {
        return null;
      }
      let toKeep: Datos[] = [];
      for (let i of datos) {
        if (i.id !== id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });

  }


}
