import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";


// likely want to do this in a support file
// so it's applied to all spec files
// cypress/support/index.js

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

When('User enter', datatable => {
    datatable.hashes().forEach(element => {
        cy.get('#username').type(element.username)
        cy.get('#password').type(element.password)
    });
})

And('User Click on Login Button', () => {
    cy.get("button[name='login']").click()
})

Then('User should logged in and Dashboard link should display', () => {
    //Verify Dashboard Tab
    //Verify that user can see OrangeHRM title
    cy.title().should('include', 'My Account – ToolsQA Demo Site')
})

Then('Message displayed LogOut Successfully', () => {
    //Verify that user logged out successfully from ShopQA app
    cy.url().should('include','my-account/')
})