import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { log } from 'util';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  loading: boolean;
  constructor( private router: ActivatedRoute, private spotify: SpotifyService ) {
    this.loading = true;
    this.router.params.subscribe( params => {
        // tslint:disable-next-line: no-string-literal
        this.getArtista( params['id'] );
    });
   }

   getArtista( id: string ) {
      
      this.spotify.getArtista( id )
        .subscribe( artista => {
            console.log(artista);
            this.artista = artista;
            this.loading = false;
        });
   }


}
