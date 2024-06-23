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

   
}