// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function() {
    it('Visits the OrangeHRM Page and Perform Login Action', function() {
    //Visit the OrnageHRM Website
    cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html");
    
   // Double Click on Button
    
    cy.get("span[class='context-menu-one btn btn-neutral']").rightclick()
    cy.get('.context-menu-icon-edit > span').click()
    
  })
  })