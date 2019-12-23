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
      Authorization: 'Bearer BQDC9hApvdTT3I0PnUHN69Ye7YqwE9ltyag-ecrQtcfejas2HbEyySK5BOSF3Q7XJW9Lkok5lzA6RD_DMhoWuaHgOjm-SY4wY7Qb7fmlQwz2d4gxkNugmfNfPjDYxRMnCI9MOf4v3C2F'});

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    return this.getQuery(`browse/new-releases?limit=20`)
      .pipe( map( (data: any) => data.albums.items ));

  }

  getArtistas( termino: string ) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map( (data: any) =>  data.artists.items));
  }

  getArtista( id: string ) {
    return this.getQuery(`artists/${ id }`);
      //.pipe( map( (data: any) =>  data.artists.items));
  }

}
