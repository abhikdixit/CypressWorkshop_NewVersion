// type definitions for Cypress object "cy"
/// <reference types="cypress" />
//Changing the timeout from 6 seconds to 5 seconds
//Cypress.config('pageLoadTimeout',80000)


describe('Verifying multiple IT Block functionality', function() {

    before(function() {
        // runs once before all tests in the it block
        //Visit the OrnageHRM Website
        cy.visit("https://opensource-demo.orangehrmlive.com/");
    
        // Enter UserName and Password
         
         cy.get("input[placeholder='Username']").type('Admin')
         cy.get("input[placeholder='Password']").type('admin123')
         cy.get("button[type='submit']").click()
      })

    it('Visits Admin Page', function() {
   
     //Verify Admin Tab and Click
    //Verify PIM Tab
    cy.xpath("//span[text()='PIM']").should('have.text','PIM').click()
    //Verify Admin URL in navigation bar
    cy.url().should('include','/pim/viewEmployeeList')
   
  })

  it('Visit Dashboard Page', function() {
     //Verify Admin Tab and Click
     cy.xpath("//span[text()='Dashboard']").should('have.text','Dashboard').click()
    
     //Verify Admin URL in navigation bar
     cy.url().should('include','/dashboard/index')
     
 })

  after(function() {
    // runs once after all tests in the it/specify block
    //Visit the OrnageHRM Website
    cy.xpath("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
    cy.xpath("//a[normalize-space()='Logout']").click()
    cy.url().should('include','web/index.php/auth/login')
    
  })

  })