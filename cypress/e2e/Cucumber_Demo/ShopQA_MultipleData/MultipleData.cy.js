import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";


// likely want to do this in a support file
// so it's applied to all spec files
// cypress/support/index.js

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

Given('User Navigate to Sign On Page in ShopQA', () => {
    cy.visit("http://shop.demoqa.com/my-account/")

})

When('User enter {string} and {string}', datatable => {
        datatable.hashes().forEach(row => {
        cy.get('#username').type(row.username)
        cy.get('#password').type(row.password)
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