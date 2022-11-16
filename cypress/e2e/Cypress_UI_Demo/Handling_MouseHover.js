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
    //cy.pause()
    //Verify Dashboard Tab
    cy.get('#menu_dashboard_index > b').should('have.text', 'Dashboard')
    // cy.contains('Leave').click()
    //Hover method not impleted as of now-----Cypress planning to add hover concept in next version
    //cy.contains('Recruitment').hover()
     //-----Using "show" concept we can handle the mouseover action on any element-------
    //cy.contains('Recruitment').invoke('show').click()
    //cy.get('#menu_recruitment_viewJobVacancy').click()
    //-----Using "mouseover" concept we can handle the mouseover action on any element-------
    //cy.contains('Recruitment').trigger('mouseover').click()
    //cy.contains('Recruitment').click()
    //cy.get('a#menu_recruitment_viewCandidates').click()
    //cy.url().should('include', 'index.php/recruitment/viewCandidates')
    //You can also force the action to be performed on the element regardless of whether the element is visible or not.
    cy.get('#menu_recruitment_viewJobVacancy').click({ force: true })
    cy.get('#btnAdd').click()
    cy.get('h1').should('contain.text','Add Job Vacancy')
  })
})