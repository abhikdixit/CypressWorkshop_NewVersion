// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('To Test OrangeHRM Login Function',function(){

it('Successfuly login to HRM app',function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
    cy.url().should('include','/dashboard')
    cy.get('#menu_dashboard_index > b').should('have.text','Dashboard')
    cy.get('#menu_admin_viewAdminModule > b').click()
    cy.get('#menu_pim_viewPimModule > b').click()
    cy.contains('Leave').click()
    cy.url().should('include','/viewLeaveList')
    cy.log('User has logged in')
})

})