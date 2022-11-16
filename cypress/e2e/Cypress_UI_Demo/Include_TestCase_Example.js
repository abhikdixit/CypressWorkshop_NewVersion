// type definitions for Cypress object "cy"
/// <reference types="cypress" />

context('My First Cypress Test', function () {

  beforeEach(function () {
    // runs once before all tests in the it block
    //Visit the OrnageHRM Website
    cy.visit("https://opensource-demo.orangehrmlive.com/");

    // Enter UserName and Password

    cy.get('input#txtUsername').type('Admin')
    cy.get('input#txtPassword').type('admin123')
    cy.get('input#btnLogin').click()

  })

  it('Visits the Leave List page', function () {
    //Click on Leave List link and verify below mentioned functinality
    cy.get('#menu_dashboard_index > b').should('have.text', 'Dashboard')
    cy.get(':nth-child(2) > .quickLaunge > a > .quickLinkText').click()
    cy.get('#leaveList_chkSearchFilter_1').should('be.checked')
    cy.get('#leaveList_chkSearchFilter_0').should('not.be.checked')

  })

  it.only('Visits the Admin page and Logout from OrangeHRM', function () {
    //Verify Admin Tab and Click
    cy.get('#menu_admin_viewAdminModule > b').should('have.contain', 'Admin').click()

  })

  afterEach(function () {
    // runs once after all tests in the it/specify block
    //Visit the OrnageHRM Website
    cy.contains('Welcome').click()
    //cy.get('#welcome').click()
    cy.get('a[href="/index.php/auth/logout"]').click()
    cy.url().should('include', 'index.php/auth/login')

  })

})