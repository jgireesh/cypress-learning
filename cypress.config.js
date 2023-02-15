const { defineConfig } = require("cypress");

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";
// var webpackPreprocessor = require('webpack');

module.exports = defineConfig({
  e2e: {
    googleUrl:'http://www.google.com',
    setupNodeEvents(on, config) {
      //implement node event listeners here
      // on('file:preprocessor', webpackPreprocessor)
      allureWriter(on, config);
      return config;
    },
    env: {
      allureReuseAfterSpec: true
  },
    specPattern:'cypress/e2e/qa_project/*.js'
  },
});
