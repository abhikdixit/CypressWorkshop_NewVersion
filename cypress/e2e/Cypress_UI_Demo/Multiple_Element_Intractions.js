// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function () {
    it('Visits the OrangeHRM Page and Perform Login Action', function () {
        //Visit the SauceDemo Website
        cy.visit("https://www.saucedemo.com/index.html");

        // Enter UserName and Password

        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('#login-button').click()

        //Interacting with List of elements and verifying total count
        cy.get('.inventory_item_name').should('have.length', 6)
        //Interacting with List of elements and verifying product name matching given below
        cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Backpack')
        //Interacting with List of elements and verifying product name matching "Sauce Labs"
        cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs')
            //Based on matching condition, user want to click on First item
            //.first().click()
            //Based on matching condition, user want to click on Last item
            //.last().click()
            //Based on matching condition, user want to click based on index, Index start from 0
            //.eq(2).click()
            //Based on matching condition, user want to click based on index, Index start from 0
            //.eq(-1).click()
            //Printing all element from array list
            .each(function ($e1, index, $listofelements) {
                //This will give us list of product name
                //cy.log($e1.text())
                //This will give us total number of product
                //cy.log($listofelements.length)
                //Using below code user can click based on Index matching 
                /*  if (index == 3) {
                      $e1.click()
                  }*/

                //Using below code user can click based on Index matching 
               /* if ($e1.text() == 'Sauce Labs Bike Light') {
                    $e1.click()
                }*/

                //Using below code user can click based on partial match 
                if ($e1.text().includes('Back')) {
                    $e1.click()
                }
            })
    })
})