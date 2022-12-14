// type definitions for Cypress object "cy"
/// <reference types="cypress" />
//Changing the timeout from 6 seconds to 5 seconds
Cypress.config('pageLoadTimeout',80000)
describe('My First Cypress Test', function() {
    it('Visits the OrangeHRM Page and Perform Login Action', function() {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
    
        // Enter UserName and Password
         
         cy.get("input[placeholder='Username']").type('Admin')
         cy.get("input[placeholder='Password']").type('admin123')
         cy.get("button[type='submit']").click()
         //Verify Dashboard Tab
         cy.xpath("//h6[normalize-space()='PIM']").should('have.text','PIM')
    //Verify Admin Tab and Click
    cy.xpath("//span[normalize-space()='Admin']").should('have.contain','Admin').click()
    
   //Verify Admin URL in navigation bar
   cy.url().should('include','web/index.php/admin/viewSystemUsers')
   //cy.get('#welcome').click()
   cy.xpath("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
   cy.xpath("//a[normalize-space()='Logout']").click()
   cy.url().should('include','web/index.php/auth/login')
   
  })
  })