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
      Authorization: 'Bearer BQB3uyPC9efc8TFmt3KzPvOvxKS4Jax_YGfnZGZgxw2jRxlJWahkC55ymVcygqe8u7l-zoRRajp6jrQUb0wMMjLrujTzyh2hU0PWo4_4FyMKpKC9L-HtALeRM8ELeSfUTbkWG9lf143i'});

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

  getTopTracks( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=ar`)
      .pipe( map( (data: any) =>  data.tracks));
  }

}
