// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Login to Orange HRM', function() {
    
      //Use the cy.fixture() method to pull data from fixture file
   beforeEach(function () {
     //Using Allia we can assign the return function to allias and call them.
    cy.fixture('UserLoginDetails').as('user')
  })
    
    it('Visits the OrangeHRM Page and Perform Login Action', function() {
    //Visit the OrnageHRM Website
    cy.visit(this.user.URL);
   
    // Enter UserName and Password

    cy.get("input[placeholder='Username']").type(this.user.Uname)
    cy.get("input[placeholder='Password']").type(this.user.Upass)
    cy.get("button[type='submit']").click()
    //Verify Dashboard Tab
    cy.xpath("//span[text()='PIM']").should('have.text','PIM')
    cy.xpath("//span[text()='Dashboard']").should('have.text','Dashboard')
    cy.xpath("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
    cy.xpath("//a[normalize-space()='Logout']").click()
    cy.url().should('include','web/index.php/auth/login')
  })
  })