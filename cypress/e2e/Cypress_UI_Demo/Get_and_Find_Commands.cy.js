// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Select the Product from Product List', function() {
    it('Searching for Product', function() {
    //Visit the OrnageHRM Website
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    
   // Search for product which start with Ca 
    
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    //Verify that total 4 products get displayed with word start with ca
    //cy.get('.product').should('have.length',4)
    //cy.get('.product:visible').should('have.length',4)
    //cy.get('div[class="products"]').find('.product').should('have.length',4)
    //Parent and child chaining using Find command
    cy.get('.products').find('.product').should('have.length',4)
    cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
     cy.get('img[alt="Cart"]').click()
    cy.wait(2000)
    cy.get('.cart-item').find('.product-info').find('.product-name').contains('Carrot')
    //cy.get('.cart-item').find('.product-info').find('.product-name').contains('Carrot')
    
  })
  })