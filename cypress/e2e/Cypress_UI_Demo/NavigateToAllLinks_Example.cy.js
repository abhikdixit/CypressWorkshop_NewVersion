// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Child Window Example', function () {
    // test case
    it('Child Window', function () {
        // launch the application
        cy.visit("https://www.google.co.in/")
        //cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
        // grab the href prop with prop() JQuery method
        cy.get('a').then(function (l) {
            const txt = l.prop('href')
            // get the url in logs
            cy.log(txt)
            // launch the url again
            cy.visit(txt)
            //cy.get("a[href='"+txt+"']").click()
            //cy.get(txt).click()
           cy.go('back')
            // assertion to verify the current Url
            // cy.url().should('include', 'https://www.tutorialspoint.com/current_affairs.htm')
            // cy.go('back')
            // cy.url().should('include','https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm')
        })
    })
    
})