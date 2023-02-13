const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    googleUrl:'http://www.google.com',
    setupNodeEvents(on, config) {
      
    },
    specPattern:'cypress/e2e/qa_project/*.js'
  },
});
