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
      Authorization: 'Bearer BQCGAqCURhma90mvq1Tunnr0_GVKwmQAsc1mkyd40x1sIHoiLMg99G4la-JB807fFWdOlyM5bz3eh4bXqroIYPq5FhLoEZ4XRV7Wl6kWXvmNKP6iFJhIfAWmKenl5BlRdBFmPrsWzz2r'});

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
