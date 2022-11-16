// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function() {
    it('Visit the Selenium Practice website and select user selected product', function() {
    //Visit the OrnageHRM Website
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    
   // Search for product which start with Ca 
    
   cy.get("input[placeholder='Search for Vegetables and Fruits']").type('ca')
    cy.wait(2000)
    //Verify that total 4 products get displayed with word start with ca
    cy.get('.products').find('.product').should('have.length',4)
    //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    cy.get('.products').find('.product').each(($el,index,$list) => {
      const itemtext=$el.find('h4.product-name').text()
      if(itemtext.includes('Carrot '))
      {
        $el.find('ADD TO CART').click()
        //Get the List of Product from Cart and Verify that Carrot is available in that List

        
       // $el.find('button').click()

      }
    })
  })
  })