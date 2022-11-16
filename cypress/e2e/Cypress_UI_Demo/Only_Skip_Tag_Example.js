// type definitions for Cypress object "cy"
/// <reference types="cypress" />

context('My First Cypress Test', function() {

  beforeEach(function() {
    // runs once before all tests in the it block
    //Visit the OrnageHRM Website
    cy.visit("https://www.testandquiz.com/selenium/testing.html");
    
  })
  
  it.only('Visits the Leave List page', function() {
   // Double Click on Button
    
   // Double Click on Button
    
   cy.get('#dblClkBtn').dblclick()
      
  })

  specify('Visits the Admin page and Logout from OrangeHRM', function() {
    //Verify Admin Tab and Click
    cy.get('.Automation').check()
      
  })

 
  })