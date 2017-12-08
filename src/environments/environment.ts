// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.



export const environment = {
  production: false,
  baseUrl : 'http://localhost:3100',
  SESSION_SECRET: '123gdj',
  FACEBOOK_CLIENT_ID: '944658295684913',
  FACEBOOK_CLIENT_SECRET: '8f83840a26d92dd8a17999aa6f7ae1a4',
  FACEBOOK_CALLBACK_URL: 'http://localhost:3100/auth/facebook/callback'
};
