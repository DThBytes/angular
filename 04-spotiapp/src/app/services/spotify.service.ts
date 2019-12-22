import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify service listo');
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      // tslint:disable-next-line: max-line-length
      Authorization: 'Bearer BQBrRJWohxDMDPzuRWUVpnCUF0aJH4FrUpF7kIudzW_6Za3z2gEnrYAZrw0GdvVIvk4qBbidJ8oT3oaEHGCVDEm1dSOLY6-of5-cB7nn0_vHv7QITdDulkYXxAYqUk6y2j7DU5sh54r5'});

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    return this.getQuery(`browse/new-releases?limit=20`)
      .pipe( map( (data: any) => data.albums.items ));

  }

  getArtista( termino: string ) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map( (data: any) =>  data.artists.items));
  }

}
