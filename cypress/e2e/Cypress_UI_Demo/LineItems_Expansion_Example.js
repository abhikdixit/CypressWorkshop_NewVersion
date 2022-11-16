// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Line Item Expansion Test', function() {
    it('Visits the Mopub Page and Perform Expansion Action', function() {
    //Visit the OrnageHRM Website
    cy.visit("https://developers.mopub.com/publishers/ui/manage-apps/");
    
   // Enter UserName and Password
    
    cy.xpath("//a[contains(text(),'Publisher Management API')]").click()

    //Verify Dashboard Tab
    cy.xpath("//a[contains(text(),'Getting Started')]").should('have.text','Getting Started')
    cy.xpath("//a[normalize-space()='Versioning']").click()
    cy.xpath("//h1[@class='page-header']").should('have.text','Versioning')
   
  })
  })