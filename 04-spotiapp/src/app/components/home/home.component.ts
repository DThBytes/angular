import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService ) {
    this.error = false;
    this.loading = true;
    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
      this.nuevasCanciones = data;
     }, ( errorServicio ) => {
      this.loading = false;
      this.error = true;
      this.mensajeError = errorServicio.error.error.message;
     });
    this.loading = false;
  }



}
