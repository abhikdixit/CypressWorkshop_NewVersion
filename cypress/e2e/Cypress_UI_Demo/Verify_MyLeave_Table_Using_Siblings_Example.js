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
    cy.get('#menu_leave_viewLeaveModule > b').click()
    cy.get('#leaveList_chkSearchFilter_1').should('be.checked')
    cy.wait(3000)
    cy.contains('td', 'Manali Kulkarni').siblings().contains('select', 'Select Action').select('Cancel')
    cy.get('#btnSave').click();
    cy.get('#btnSearch').click()
    cy.wait(3000)
    cy.get('#resultTable>tbody>tr').each(function($row){
        cy.wrap($row).should('not.have.text','Manali Kulkarni')
    })
})
  })