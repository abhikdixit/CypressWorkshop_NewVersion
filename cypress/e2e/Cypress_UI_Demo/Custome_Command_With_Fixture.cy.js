// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function () {

  //Use the cy.fixture() method to pull data from fixture file
  before(function () {
    cy.fixture('login').then(function (data) {
      this.data = data;
    })
  })


  it('Visits the OrangeHRM Page and Perform Login Action', function () {
    //Visit the OrnageHRM Website
    cy.visit(this.data.URL);

    // Enter UserName and Password
    //Calling Custom Command to Enter username, password and Click Login button 
    cy.Login(this.data.Uname, this.data.Upass)
    //Verify Dashboard Tab
    cy.xpath("//span[text()='PIM']").should('have.text','PIM')
    cy.xpath("//span[text()='Dashboard']").should('have.text','Dashboard')
    cy.xpath("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
    cy.xpath("//a[normalize-space()='Logout']").click()
    cy.url().should('include','web/index.php/auth/login')

  })
})