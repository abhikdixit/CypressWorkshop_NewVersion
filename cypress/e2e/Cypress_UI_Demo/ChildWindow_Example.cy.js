// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Child Window Example', function () {
    // test case
    it.only('Child Window', function () {
        // launch the application
        cy.visit("https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm")
        // grab the href prop with prop() JQuery method
        cy.get(':nth-child(2) > a').then(function (l) {
            const txt = l.prop('href')
            // get the url in logs
            cy.log(txt)
            // launch the url again
            cy.visit(txt)
            // assertion to verify the current Url
            cy.url().should('include', 'https://www.tutorialspoint.com/codingground.htm')
            cy.go('back')
            cy.url().should('include','https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm')
        })
    })
})