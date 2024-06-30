import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Config } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private $config: Config;
  get config() { return this.$config; }

  constructor(
    private http: HttpClient
  ) {
    console.info('CONFIG SERVICE CONSTRUCTOR');
   }

  load = () => {
    return this.http.get<any>('/assets/config/env.json')
    .toPromise()
    .then(data => {
      if (environment.production){
        var info = window.location;
        this.$config = {
          production: environment.production,
          RESTUrl: `${info.protocol}//${info.hostname}:${info.port}/api`,
          MediaUrl: `${info.protocol}//${info.hostname}:${info.port}/m`,
          host: info.hostname,
          port: parseInt(info.port),
          secure:(info.protocol.startsWith('https')),
          wsHost: info.hostname,
          wsPort: environment.wsPort,
          coreHost: info.hostname,
          corePort: environment.corePort
        }
      } else {
        this.$config = {
            production: environment.production,
            RESTUrl: `http://${environment.host}:${environment.port}/api`,
            MediaUrl: `http://${environment.host}:${environment.port}/m`,
            host: environment.host,
            port: environment.port,
            secure:false,
            wsHost: environment.wsHost,
            wsPort: environment.wsPort,
            coreHost: environment.coreHost,
            corePort: environment.corePort
          }
      }
      this.$config.timeOut = data.timeOut;
      this.$config.retry = data.retry;
      this.$config.delay = data.delay;
      this.$config.configurations = environment.configurations;
      this.$config.idle = data.idle;
      this.$config.maxLog = data.maxLog;
      this.$config.tagsTail = data.tagsTail;
      this.$config.machineId = data.machineId;
      this.$config.machineName = data.machineName;
      this.$config.slPlc = data.slPlc;
      this.$config.slPlcWs = data.slPlcWs;
      this.$config.nctlPlc = data.nctlPlc;
      this.$config.nctlPlcWs = data.nctlPlcWs;
      this.$config.wctlPlc = data.wctlPlc;
      this.$config.wctlPlcWs = data.wctlPlcWs;
      this.$config.wsData = data.wsData;
      this.$config.ordersNum = data.ordersNum;

    }, error => {
      console.log('Error', error);
    });
  }
}

