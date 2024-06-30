import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';
import { Observable, forkJoin } from 'rxjs';
import { isArray } from '../tools/functions';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tz:string = Intl.DateTimeFormat().resolvedOptions().timeZone;
  public ready = false

  constructor(
    public apiService: ApiService,
    public configService: ConfigService,
  ) { }

  
  load = () => {

    return new Promise<void>(resolve => {
      const sources = [
        // TODO, add functions to call api endpoints for settings and initial data loading (i.e. translations & settings )
      ]

      console.log('INSERT HERE LANGS LOADINGS & SETTINGS')

      forkJoin(sources).subscribe({
        next: () => {
          this.initDataService();
          resolve();
        }, 
        error : (e) => {
        console.log(e);
      }
      });
    });
  }

    // INIT
  initDataService() {
    // TODO add singleton initialization with params data from init calls (i.e. statusManager acceping statuses loaded on APP_INITIALIZER )
    this.ready = true;
    // console.log(this.settings);
  }

  
   public createQueryString(params: any = {}): string {

    let queryString = Object.keys(params).map(key => {

      if (isArray(params[key])) {
        return params[key].map(param => `${key}[]=${param}`).join('&');
      } else {
        return key + '=' + params[key];
      }

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
