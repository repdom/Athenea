import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Config } from './config';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends GeneralService {

  constructor(http: Http) {
    super(Config.host + '/registroUsuario', http);
  }

  getCharlasRegistradas(email: string) {
    const headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json'});
    // headers.append('Authorization', this.cookieService);
    const options = new RequestOptions({ headers: headers });
    // tslint:disable-next-line:max-line-length
    return this.http.get(this.url + `?email=${email}`, options)
      .pipe(
        map(response => response.json()),
        catchError(this.handlerError)
      );
  }

  getCharlasGenerales() {
    const headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json'});
    // headers.append('Authorization', this.cookieService);
    const options = new RequestOptions({ headers: headers });
    // tslint:disable-next-line:max-line-length
    return this.http.get(Config.hostCharlas, options)
      .pipe(
        map(response => response.json()),
        catchError(this.handlerError)
      );
  }
}
