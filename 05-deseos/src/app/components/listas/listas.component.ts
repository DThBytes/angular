import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent  {

  listas: any[] = [];
  constructor( public deseosService: DeseosService,
               private router: Router,
               private alertCtrl: AlertController ) {
    this.listas = deseosService.listas;
  }

  public async agregarLista() {
    const alert = await this.alertCtrl.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelar');
          }
        },
        {
          text: 'Crear',
          handler: ( data ) => {
            console.log(data);
            if ( data.titulo.length === 0 ) {
              return;
            }
            const listaId = this.deseosService.crearLista( data.titulo );
            this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`);

          }
        }
      ]
    });
    alert.present();
    // this.router.navigateByUrl('/tabs/tab1/agregar');
  }
  listaSeleccionada( lista: Lista ) {
    this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id }`);
  }


}
