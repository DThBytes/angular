import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../servicios/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe: any = {};

  getLogo() {
    if (this.heroe.casa === 'Marvel') {
      return 'assets/img/MARVEL_logo.png';
    } else {
      return 'assets/img/DC_logo.png';
    }
  }

  constructor( private activatedRoute: ActivatedRoute,
               private _heroeService: HeroesService
    ) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroeService.getHeroe ( params.id);
      /* console.log(this.heroe); */
    });

  }
}
