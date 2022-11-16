// type definitions for Cypress object "cy"
/// <reference types="cypress" />
//Changing the timeout from 6 seconds to 5 seconds
//Cypress.config('pageLoadTimeout',80000)


describe('Verifying multiple IT Block functionality', function() {

    before(function() {
        // runs once before all tests in the it block
        //Visit the OrnageHRM Website
        cy.visit("https://blazedemo.com/index.php");
    
      })

    it('Visits Find Flight Page', function() {
   
     //Verify Admin Tab and Click
    cy.get("input[value='Find Flights']").should('have.value','Find Flights').click()
    //Verify Admin URL in navigation bar
    cy.url().should('include','/reserve.php')
   
  })

  it('Visit Leave Page', function() {
   
     //Click on Leave Module
     cy.xpath("//tbody/tr[1]/td[1]/input[1]").click()
  
 })

  after(function() {
    // runs once after all tests in the it/specify block
    cy.xpath("//a[normalize-space()='Travel The World']").click()
    
  })

  })