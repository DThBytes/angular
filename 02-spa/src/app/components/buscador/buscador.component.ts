import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any [] = [];
  termino: string;

  @Input() heroe: any = {};
  @Input() index: number;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private router: Router ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{

      this.heroes = this._heroesService.buscarHeroes( params['termino']);
      this.termino = params['termino'];
    });
  }

  verHeroe() {
    console.log( this.index );
    this.router.navigate( ['/heroe', this.index] );
  }

}
