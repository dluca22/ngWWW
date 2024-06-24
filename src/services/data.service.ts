import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tz:string = Intl.DateTimeFormat().resolvedOptions().timeZone;


  constructor(
    public apiService: ApiService,
    public configService: ConfigService,
  ) { }

  
  load = () => {

    return new Promise<void>(resolve => {
      const sources = [
      ]

      forkJoin(sources).subscribe({
        next: () => {
          resolve();
        }, 
        error : (e) => {
        console.log(e);
      }
      });
    });
  }

   public createQueryString(params: any = {}): string {

    let queryString = Object.keys(params).map(key => {

      // if (isArray(params[key])) {
      //   return params[key].map(param => `${key}[]=${param}`).join('&');
      // } else {
        return key + '=' + params[key];
2      // }

    }).join('&');

    if (queryString.length) {
      queryString = '?' + queryString;
    }

    return queryString;
  }


  public getLeghe(): Observable<any> {
    return this.apiService.get('/leghe/lista')
  }
}
