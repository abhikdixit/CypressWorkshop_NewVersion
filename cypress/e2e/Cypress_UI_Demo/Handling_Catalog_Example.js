// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Line Item Expansion Test', function() {
    it('Visits the Mopub Page and Perform Expansion Action', function() {
    //Visit the OrnageHRM Website
    cy.visit("https://tools.nov.com/HT-Catalog/index.html#");
    
   // Below xpath works when catalog value is Unique
    
    cy.xpath("//p[contains(text(),'HYDRAULIC ELEVATORS')]").click()

    //Below Xpath for the Catalog which having multiple mathcing pattern
    cy.xpath("//p[@id='PageLabel']").should('have.text','HYDRAULIC ELEVATORS')

  })
  })