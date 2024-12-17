const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: 'http://54.147.49.214:5001/claude/',
        specPattern: 'cypress/e2e/tests/**/*.js',
    },
    // chromeWebSecurity: false,
    redirectionUrl: 'https://www.sbzend.ssls.com/',
    // projectId: 'n73dbg',
    viewportWidth: 1792,
    viewportHeight: 1120,
    defaultCommandTimeout: 15000,
    // video: false,
    pageLoadTimeout: 20000,
    // onAnyAbort: true,
    env: {
        userOneEmail: 'user@gmail.com',
    },
    retries: {
        runMode: 1,
        openMode: 0,
    },
});