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
    cy.get(':nth-child(2) > .quickLaunge > a > .quickLinkText').click()
    cy.get('#leaveList_chkSearchFilter_1').should('be.checked')
    cy.get('#leaveList_chkSearchFilter_0').should('not.be.checked')
    cy.get('#leaveList_chkSearchFilter_0').check()
    cy.get('#leaveList_chkSearchFilter_1').uncheck()
    cy.get('#leaveList_cmbSubunit').select('Sales')
  })
  })