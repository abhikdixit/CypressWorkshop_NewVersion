// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function () {
  it('Visits the OrangeHRM Page and Perform Login Action', function () {

    //Calling URL from cypress.json
    cy.visit(Cypress.env('url'));

    // Enter UserName and Password

    cy.get('input#txtUsername').type('Admin')
    cy.get('input#txtPassword').type('admin123')
    cy.get('input#btnLogin').click()
    //Verify Dashboard Tab
    cy.get('#menu_dashboard_index > b').should('have.text', 'Dashboard')

  })
})