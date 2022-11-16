// type definitions for Cypress object "cy"
/// <reference types="cypress" />

context('My First Cypress Test', function() {

  before('Visits the Login page',function() {
    // runs once before all tests in the it block
    //Visit the WebOrders Login Website
    cy.visit("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx");
    
   // Enter UserName and Password
    
    cy.get('#ctl00_MainContent_username').type('Tester')
    cy.get('#ctl00_MainContent_password').type('test')
    cy.get('#ctl00_MainContent_login_button').click()

  })
  
  it('Visits the Leave List page', function() {
    //Verify user landed on Web Orders page
    cy.get('h1').should('have.text','Web Orders')
    cy.get('#ctl00_menu > :nth-child(3) > a').click()
    cy.get('#ctl00_MainContent_fmwOrder_ddlProduct').select('FamilyAlbum')
      
  })

   
  after('Click Logout from WebOrders', function() {

    cy.get('#ctl00_logout').click()
   cy.url().should('include','Login.aspx')
      
  })

  })