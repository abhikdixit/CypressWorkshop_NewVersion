// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Web Auth Functionality', function() {

    it.skip('Navigate to Webpage by passing username and password in URL', function() {
    //Visit the OrnageHRM Website
    cy.visit("http://admin:admin@the-internet.herokuapp.com/basic_auth");

    //Verify that user is in Basic Auth page
    cy.get('h3').should('have.text','Basic Auth')
      
  })

  it('Navigate to Webpage by passing username and password as Auth info in Body', function() {
    //Visit the OrnageHRM Website
    cy.visit("http://the-internet.herokuapp.com/basic_auth", {

        auth: {
      
                'username': 'admin',
                'password': 'admin'
        
              }
        
        })
     
    //Verify that user is in Basic Auth page
    cy.get('h3').should('have.text','Basic Auth')
  })

  
  })