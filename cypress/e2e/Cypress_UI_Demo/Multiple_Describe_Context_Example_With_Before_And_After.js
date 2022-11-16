// type definitions for Cypress object "cy"
/// <reference types="cypress" />

beforeEach(function() {
  // runs once before all tests in the it block
  //Visit the OrnageHRM Website
  cy.visit("https://opensource-demo.orangehrmlive.com/");
 

})


context('This is for Login verification', function() {

  it('Visits the Leave List page', function() {
 
   // Enter UserName and Password
    
   cy.get('input#txtUsername').type('Admin')
   cy.get('input#txtPassword').type('admin123')
   cy.get('input#btnLogin').click()
      
  })

  })

  //describe.only('This is for Forget Password', function() {
  describe('This is for ForgetPassword Link Click', function() {

    specify('Visits the Admin page and Logout from OrangeHRM', function() {
      //Verify Admin Tab and Click
     cy.log('User is in Login Page')
     cy.get('#forgotPasswordLink > a').click()
    })
  
 
    })