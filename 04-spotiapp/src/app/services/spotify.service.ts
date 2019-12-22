import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify service listo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAzcgnTdH2ATZZAhem4uow4fM4arCvRt9Tpzt7CYzQyXKq62neQr8rl-ZjZ8c0WVsPSnfC7_SX2pRIrXlQ'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

  }

}
