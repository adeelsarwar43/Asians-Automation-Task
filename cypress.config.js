const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    email: 'a@gmail.com',
    password: 'abc'
  },


  defaultCommandTimeout: 5000,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  chromeWebSecurity: false,
  requestTimeout: 5000,
  viewportHeight: 800,
  viewportWidth: 1480,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //  experimentalSessionAndOrigin: true,
     testIsolation: false,
    baseUrl: "https://user.asians.group/auth/realms/asians/protocol/openid-connect/auth?client_id=public&redirect_uri=https%3A%2F%2Fconsole.uat.asians.group%2F%23%2Fdomain%2Flist&state=48ecb242-d010-4aac-9b2c-3cd23c96d1e4&response_mode=fragment&response_type=code&scope=openid&nonce=1306b598-a7ad-45dd-88e6-1a72f1a33136",
  },
});
