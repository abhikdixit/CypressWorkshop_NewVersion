// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function() {
    it('Visits the OrangeHRM Page and Perform Login Action', function() {
    //Visit the OrnageHRM Website
    cy.visit("https://www.testandquiz.com/selenium/testing.html");
    
   // Double Click on Button
    
    cy.get('#dblClkBtn').dblclick()
   
  })
  })