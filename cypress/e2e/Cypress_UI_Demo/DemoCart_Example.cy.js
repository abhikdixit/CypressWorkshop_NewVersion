// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function() {
    it('Visits the OrangeHRM Page and Perform Login Action', function() {
    //Visit the OrnageHRM Website
    cy.visit("https://demo.opencart.com/index.php?route=common/home");
    cy.xpath("//a[text()='About Us']").click()
    cy.get("div[id='content'] h1").should('have.text','About Us')
   // Enter UserName and Password
    
    /*cy.get('input#txtUsername').type('Admin')
    cy.get('input#txtPassword').type('admin123')
    cy.get('input#btnLogin').click()
    //Verify Dashboard Tab
    cy.get('#menu_dashboard_index > b').should('have.text','Dashboard')
    cy.get('#menu_admin_viewAdminModule > b').click()*/
      
  })
  
  })