// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  label: 'DEV',
  langs: ['en', 'it'],
  host: 'localhost',
  port: 8080,
  authKey:'TATA',
  wsHost: '',
  wsPort: 3000,
  coreHost: 'localhost',
  corePort: 5001,
  idPress: 8,
  configurations: {
    full: {
      logic: false,
      rest: true,
    }
  },
  login: {
    user: 'devel@oneoffsolution.it',
    pwd: 'Passw0rd',
    mode: 'U' // E = email, U = username, B = Both
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
