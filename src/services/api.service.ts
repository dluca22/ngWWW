import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// import { ConfigService } from './config.service';
import { environment } from '@envir/environment';
import { ConfigService } from '@services/config.service';

// const headers = new HttpHeaders({
//   'Content-Type':'application/json; charset=utf-8',
//   'Authorization': 'WUT test-token'
// });

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json; charset=utf-8',
//     'Authorization': 'WUT test-token'
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // $config = environment;

  get $config () {
    return this.configService.config;
  }

  $headers = new HttpHeaders({
    'Content-Type':'application/json; charset=utf-8',
  });
  $options;

  constructor(
    private configService: ConfigService,
    private http: HttpClient,
  ) {
    console.log('API SERVICE CONSTRUCTOR')
    // if (this.$config['token']){
    //   this.$headers = this.$headers.set('Authorization', 'WUT ' + this.$config['token']);
    // }
    this.$options = {
      headers: this.$headers
    }

    if (!environment.production)
      console.log(`%c 🏴‍☠️ Running ${environment.label} environment `, 'background: #8ce656; color: #761dac;');
  }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams(), options?: any): Observable<any> { //PARAMS ?!?
    return this.http.get(this.$config.RESTUrl + path, options || { headers: this.$options.headers })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: object = {}, jsonDdata = true): Observable<any> {
    let $options;
    let $body;

    if (jsonDdata){
      $options = this.$options;
      $body = JSON.stringify(body);
    } else {
      const headers = new HttpHeaders({
      });
      //, ...{ responseType: 'json'}
      //
      $options = {...this.$options, ...{ headers: headers }};
      $body = body;
    }

    return this.http.put(
      this.$config.RESTUrl + path,
      $body,
      $options
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: any = {}, jsonDdata = true): Observable<any> {
    let $options;
    let $body;

    if (jsonDdata){
      $options = this.$options;
      $body = JSON.stringify(body);
    } else {
      const headers = new HttpHeaders({
      });
      //, ...{ responseType: 'json'}
      //
      $options = {...this.$options, ...{ headers: headers }};
      $body = body;
    }
    return this.http.post(
      this.$config.RESTUrl + path,
      $body,
      $options
    ).pipe(catchError(this.formatErrors));

    //this.$options
  }

  delete(path): Observable<any> {
    return this.http.delete(
      this.$config.RESTUrl + path,
      this.$options
    ).pipe(catchError(this.formatErrors));
  }

  getMedia(path: string, params: HttpParams = new HttpParams()): Observable<any> { //PARAMS ?!?
    return this.http.get(this.$config.MediaUrl + path, {
      responseType: 'blob'
    }).pipe(catchError(this.formatErrors));
  }
}
