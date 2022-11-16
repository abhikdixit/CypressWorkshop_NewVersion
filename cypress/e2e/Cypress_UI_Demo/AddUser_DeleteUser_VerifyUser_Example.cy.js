// type definitions for Cypress object "cy"
/// <reference types="cypress" />
//Changing the timeout from 6 seconds to 5 seconds


Cypress.config('pageLoadTimeout',80000)
describe('My First Cypress Test', function() {

    before(function() {
        // runs once before all tests in the it block
        //Visit the OrnageHRM Website
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        
       // Enter UserName and Password
        
        cy.get('input#txtUsername').type('Admin')
        cy.get('input#txtPassword').type('admin123')
        cy.get('input#btnLogin').click()
    
      })


    it('Visits the OrangeHRM Page and Perform Add User and checks added user', function() {
        cy.getCookiesValue()
                .then((returned_value) => {
                    cy.log("Cookies Value = " + returned_value)
                    cy.setCookie('orangehrm',returned_value)
                })

    //Verify Dashboard Tab
    cy.get('#menu_admin_viewAdminModule > b').should('have.text','Admin').click()
    cy.wait(2000)
    cy.get('#btnAdd').click()
    cy.get('#systemUser_userType').select('Admin')
    cy.get('#systemUser_employeeName_empName').type('Fiona Grace')
    cy.get('#systemUser_userName').type('Dixit'+ new Date())
    cy.get('#systemUser_password').type('admin123')
    cy.get('#systemUser_confirmPassword').type('admin123')
    cy.get('#btnSave').click()
    cy.wait(2000)
   
  })

  it('Visits the Admin Page and Perform Delete Action', function() {

    cy.getCookiesValue()
    .then((returned_value) => {
        cy.log("Cookies Value = " + returned_value)
        cy.setCookie('orangehrm',returned_value)
    })
    //Clicking checkbox of added user ...using XPath concept.
    cy.get('.table').find('td').contains('Dixit').click()
    cy.wait(2000)
    cy.get('#btnCancel').click()
    //cy.xpath("//a[contains(text(),'Jyothi')]/parent::td/preceding-sibling::td/input").click()
    //Below code perform using cypress inbuilt feature.
    // cy.contains('td a', 'xyz123').parent().contains('td input').click()
  //   cy.contains('td', 'aabcdd')  
  // .prev('td')                        
  // .find('input')                     
  // .check();
   // cy.get('#btnDelete').click()
   // cy.get('#dialogDeleteBtn').click()
   // cy.wait(3000)
    //cy.contains('td a', 'aabcdd').should('not.exist')

   
  })

  after(function() {
    // runs once after all tests in the it/specify block
    //Visit the OrnageHRM Website
    cy.contains('Welcome').click()
    //cy.get('#welcome').click()
    cy.get('a[href="/index.php/auth/logout"]').click()
    cy.url().should('include','index.php/auth/login')

  })
  })

