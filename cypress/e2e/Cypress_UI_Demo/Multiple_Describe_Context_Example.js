// type definitions for Cypress object "cy"
/// <reference types="cypress" />

context('This is for Login verification', function() {

  beforeEach(function() {
    // runs once before all tests in the it block
    //Visit the OrnageHRM Website
    cy.visit("https://opensource-demo.orangehrmlive.com/");
   

  })
  
  it('Visits the Leave List page', function() {
 
   // Enter UserName and Password
    
   cy.get('input#txtUsername').type('Admin')
   cy.get('input#txtPassword').type('admin123')
   cy.get('input#btnLogin').click()
      
  })

  it('Visits the Admin page and Logout from OrangeHRM', function() {
    //Verify Admin Tab and Click
   cy.log('User is in Login Page')
      
  })

  })

  //describe.only('This is for Forget Password', function() {
  describe('This is for Forget Password', function() {

    beforeEach(function() {
      // runs once before all tests in the it block
      //Visit the OrnageHRM Website
      cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/requestPasswordResetCode");
        
    })
    
    it('Handle Cancel Verification', function() {
      //Click on Leave List link and verify below mentioned functinality
      //cy.contains('Forgot your password?').click()
      cy.get('.cancel').click()
        
    })

    it('Handle Reset Verification', function() {
      //Click on Leave List link and verify below mentioned functinality
      cy.get('#btnSearchValues').click()
      //cy.get('.cancel').click()
        
    })
  
 
    })