import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../config/environment';

export interface Config {
  production: boolean;
  RESTUrl: string;
  MediaUrl?: string;
  host: string;
  port: number;
  secure: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private $config: Config;
  get config() { return this.$config; }

  constructor( ) {
    console.info('CONFIG SERVICE CONSTRUCTOR');
   }

  load = () => {
    if (environment.production){
      var info = window.location;
      this.$config = {
        production: environment.production,
        RESTUrl: `${info.protocol}//${info.hostname}:${info.port}/api`,
        MediaUrl: `${info.protocol}//${info.hostname}:${info.port}/m`,
        host: info.hostname,
        port: parseInt(info.port),
        secure:(info.protocol.startsWith('https'))
      }
    } else {
      this.$config = {
          production: environment.production,
          RESTUrl: `http://${environment.host}:${environment.port}/api`,
          MediaUrl: `http://${environment.host}:${environment.port}/m`,
          host: environment.host,
          port: environment.port,
          secure:false
        }
    }
  };
}

