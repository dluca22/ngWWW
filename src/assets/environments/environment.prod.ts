export const environment = {
  production: true,
  label: 'PROD',
  langs: ['en', 'it'],
  host: '',
  port: 8080,
  authKey:'TATA',
  wsHost: '',
  wsPort: 3000,
  coreHost: '',
  corePort: 5001,
  idPress: 8,
  configurations: {
    full: {
      logic: true,
      rest: true,
    }
  },
  login: {
    user: '',
    pwd: '',
    mode: 'U' // E = email, U = username, B = Both
  }
};
