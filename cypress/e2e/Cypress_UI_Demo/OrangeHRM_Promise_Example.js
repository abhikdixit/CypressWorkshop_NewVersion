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
    cy.get('#menu_dashboard_index > b').then(function(Dashboardtxt)
    {
        //text() is not Cypress command, its Jquery command, as Cypress supoort Jquery, hence we can use them with promise concept
        
        cy.log(Dashboardtxt.text())
        Dashboardtxt.click()
        cy.get(':nth-child(4) > .quickLaunge > a > .quickLinkText').click()

    })
    //You cannot use text() directly on any cypress command, as its not cypress command.
   // cy.log(cy.get('#menu_dashboard_index > b').text())
  })
  })