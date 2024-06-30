import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import localeIt from '@angular/common/locales/it';
import localeEn from '@angular/common/locales/en';
import { ConfigService } from '../../services/config.service';
import { DataService } from '../../services/data.service';
import { LandingComponent } from '../../views/landing/landing.component';
import { NewsComponent } from '../../views/landing/news.component';
// import {NgxBootstrapSwitchModule} from 'ngx-bootstrap-switch';


class MyErrorHandler implements ErrorHandler {
  handleError(error:any) {
    console.error('Caught by error handler!');
    console.log(error);
  }
}

export function setupAppService(config: ConfigService, dataService:DataService) {
  let delay = new Promise(resolve => {
    setTimeout(resolve, 200, 'Yaaaah!');
  });
  return () => new Promise<void>(resolve => {
    // console.info('setupAppService')
    config.load().then(()=>{
      registerLocaleData(localeIt, 'it');
      registerLocaleData(localeEn, 'en');

      Promise.all([
        dataService.load()
      ]).then(() => {
        resolve();
      })
    })
  });
}


@NgModule({
  imports: [
    // CoreModule,
    NewsComponent,
    LandingComponent

  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: setupAppService,
      deps: [ConfigService, DataService],
      multi: true
    },
    { provide: ErrorHandler, useClass: MyErrorHandler }
  ],
  declarations: [
    // ShiftPipe,
  ],
  exports: [
    // ShiftPipe,
  ]
})
export class SharedModule { }
