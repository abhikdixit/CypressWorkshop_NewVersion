// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function() {
    it('Visits the OrangeHRM Page and Perform Login Action', function() {
    //Visit the OrnageHRM Website
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    
   // Enter UserName and Password
    
    cy.get('input#txtUsername').type('Admin')
    cy.get('input#txtPassword').type('admin123')
    cy.get('input#btnLogin').click()
    //Verify Dashboard Tab
    cy.get('#menu_dashboard_index > b').should('have.text','Dashboard')
    //Click Leave Tab and verify using Regular Expression
    //cy.get(':nth-child(2) > .quickLaunge > a > .quickLinkText').click()
    cy.get("a[id='menu_admin_viewAdminModule'] b").click()
    cy.get('#searchSystemUser_userType')
    .contains(/^Ad\w+/).should('have.value', '1')
    //.find('.option')
    //.contains(/^Admin$/)
    .click({force: true})
    //cy.get('#leaveList_cmbSubunit').select('Sales')
    //cy.get(`#leaveList_cmbSubunit`)
    //cy.get('#btnSearch')
    //.invoke('text')
    //.should('match',/Search/)
    //.contains('/Search/')
   //Click on welcome link
   cy.contains('Welcome').click()
   
   //cy.get('#welcome').click()
   cy.get('a[href="/index.php/auth/logout"]').click()
   cy.url().should('include','index.php/auth/login')
   
  })
  })