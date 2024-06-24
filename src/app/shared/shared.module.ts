import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

// import localeIt from '@angular/common/locales/it';
// import localeEn from '@angular/common/locales/en';
// import {NgxBootstrapSwitchModule} from 'ngx-bootstrap-switch';

import { ConfigService } from '../../services';
import { DataService } from '../../services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

class MyErrorHandler implements ErrorHandler {
  handleError(error) {
    console.error('TODO error handler!');
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
      // registerLocaleData(localeIt, 'it');
      // registerLocaleData(localeEn, 'en');

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
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
