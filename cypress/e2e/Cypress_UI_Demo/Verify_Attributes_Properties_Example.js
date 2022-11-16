// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Handling Mouse Hover in Cypress', function () {
  it('Visits the Yatra Page and Perform Login Action', function () {
    //Visit the Yatra Website
    cy.visit("https://opensource-demo.orangehrmlive.com/")

    // Enter UserName and Password

    cy.get('input#txtUsername').type('Admin')
    cy.get('input#txtPassword').type('admin123')
    cy.get('input#btnLogin').click()
    //Verify Dashboard Tab
    cy.get('#menu_dashboard_index > b').should('have.text', 'Dashboard')

    cy.get('#menu_recruitment_viewJobVacancy').click({ force: true })
    cy.get('#btnAdd').click()
    cy.get('h1').should('contain.text', 'Add Job Vacancy')
    cy.get('#addJobVacancy_status').should('have.attr','checked','checked')
    cy.get('#addJobVacancy_name').should('have.attr','maxlength','50')
  })
})