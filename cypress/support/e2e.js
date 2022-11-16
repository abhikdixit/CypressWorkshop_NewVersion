// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
//import 'cypress-iframe';
// Alternatively you can use CommonJS syntax:
// require('./commands')

require('cypress-xpath')
import 'cypress-axe'

// Alternatively you can use CommonJS syntax:
// require('./commands')
// likely want to do this in a support file
// so it's applied to all spec files
// cypress/support/index.js

/*const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', cucumber())
    // modify config values
    //integrationFolder:""
    //config.pageLoadTimeout = 50000
    config.env.url_Beta = 'https://opensource-demo.orangehrmlive.com/'
    return config
}*/

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    
    return false
  })
