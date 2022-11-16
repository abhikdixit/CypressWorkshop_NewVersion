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
    //Verify Admin Tab and Click
    cy.get('#menu_admin_viewAdminModule > b').should('have.contain','Admin').click()
   //Verify Admin URL in navigation bar
   cy.url().should('include','index.php/admin/viewSystemUsers')
   cy.contains('Welcome').click()
   //cy.get('#welcome').click()
   cy.get('a[href="/index.php/auth/logout"]').click()
   cy.url().should('include','index.php/auth/login')
   

   cy.waitUntil(
    () =>
      cy
        .request('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        .its("status")
        .then(status => status === 201),
       //.get('#btnLogin')
       //.should('have.value','LOGIN')
       //.then(value => value === 'LOGIN'),
    {
      interval: 5000, // tries every 5s
      timeout: 30000, // gives up after 30s
      errorMsg: 'Timed out pinging ${https://opensource-demo.orangehrmlive.com/index.php/auth/login}'
    }
  )
   
  })
  })