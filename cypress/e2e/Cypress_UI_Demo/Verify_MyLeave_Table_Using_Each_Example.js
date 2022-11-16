// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function () {
    before('My First Cypress Test', function () {
        // runs once before all tests in the it block
        //Visit the WebOrders Login Website
        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
        cy.get('#txtUsername').type("Admin")
        cy.get('#txtPassword').type("admin123")
        cy.get('#btnLogin').click()

        cy.url().should("include", "/dashboard")
    })
    it('Visit Leave List Page and Verify the Checkbox Status', function () {
        cy.get('#menu_leave_viewLeaveModule > b').invoke('show').click()
        cy.get('#menu_leave_viewLeaveList').click({ force: true })
        cy.get('#leaveList_chkSearchFilter_checkboxgroup_allcheck').uncheck()
        cy.get('#leaveList_chkSearchFilter_1').check()
        cy.get('#leaveList_chkSearchFilter_1').should('be.checked')
        cy.get('#btnSearch').click()
        cy.log('done with verification of checkbox')
    })
    it('Cancel Leave if Found US - Vacation', function () {

        cy.get('#resultTable>tbody>tr').each(function ($row) {
            cy.wrap($row).find('td:eq(2)').then(($data) => {
                cy.log(JSON.stringify($data.text()))
                
                if ($data.text() == "CAN - Vacation") {
                    cy.log("found leave")
                    cy.wrap($row).find('td:eq(7)').then(function ($data) {
                    cy.wrap($data).find('.select_action').select('Cancel')
                    cy.log("cancelled")
                    })
                }
            })
        })
        cy.get('#btnSave').click()
    })
})