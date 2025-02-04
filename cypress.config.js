const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Other configurations...
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
