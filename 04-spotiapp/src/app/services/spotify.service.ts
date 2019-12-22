import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify service listo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      // tslint:disable-next-line: max-line-length
      Authorization: 'Bearer BQDaOwmI5ZotlM52gR-TtPFhAl6a0KJHiIRQSFPu1JStkguGWJOoGsdA3gWG_tnyqLYbO69y6P673E20mftkh8aXg2941KBbPb1Ft10E1xFpseq0jEgUHXNrt0JXJ-7OfISBm37jC9wH'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

  }

  getArtista( termino: string ) {
    const headers = new HttpHeaders({
      // tslint:disable-next-line: max-line-length
      Authorization: 'Bearer BQDaOwmI5ZotlM52gR-TtPFhAl6a0KJHiIRQSFPu1JStkguGWJOoGsdA3gWG_tnyqLYbO69y6P673E20mftkh8aXg2941KBbPb1Ft10E1xFpseq0jEgUHXNrt0JXJ-7OfISBm37jC9wH'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
  }

}
