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
      Authorization: 'Bearer BQDy12PLQ8vRrwcRfdRdPo4I6JICfEXYdeFr2pjD0o5xuYGHfyOscwSiUXDA-3kovSsMR223SBQQlp1IH5Ci0MR9Xydi0nEu8aKoG8rlIk6YdiXs6CPqpJOur8HV2S9dWftJXnzw3NNm'});

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
