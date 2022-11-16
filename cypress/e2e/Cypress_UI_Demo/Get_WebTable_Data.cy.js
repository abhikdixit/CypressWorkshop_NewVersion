// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function () {

    beforeEach(function () {
        //Visit the Website
        cy.visit('https://the-internet.herokuapp.com/tables')
    })

    it('Get All data from WebTable', function () {
        //Visit the SauceDemo Website
        cy.get('#table1>tbody>tr').should('have.length', 4)
        cy.get('#table1>tbody>tr:eq(0)>td').should('have.length', 6)
        //Get the all data from WebTable
        cy.get('#table1>tbody>tr')
            .each(function ($row, index, $rows) {
                cy.wrap($row).within(function () {
                    cy.get('td')
                        .each(function ($cellData, index, $coulmns) {
                            cy.log($cellData.text())
                            console.log($cellData.text())
                        })
                })
            })

    })

    it('Get Single row Data', function () {
        //Using First() function, you can get value of First Row
        //cy.get('#table1>tbody>tr').first()
        //Using last() function, you can get value of last Row
        //cy.get('#table1>tbody>tr').last()
        cy.get('#table1>tbody>tr').eq(0)
            .within(function () {
                cy.get('td').eq(3).should('contain.text', '$50.00')
            })
    })

    it('Get Specific cell value based on another cell', function () {
        cy.get('#table1').contains('Conway').parent()
            .within(function () {
                //cy.get('td').eq(4).then(function(websitelink){
                cy.get('td').eq(5).then(function (Action) {
                    cy.log(Action.text())
                })
            })
    })

    it('Get Last row Data', function () {
        //Using First() function, you can get value of First Row
        //cy.get('#table1>tbody>tr').first()
        //Using last() function, you can get value of last Row
        //cy.get('#table1>tbody>tr').last()
        cy.get('#table1>tbody>tr').last()
            .within(function () {
                cy.get('td').eq(3).should('contain.text', '$50.00')
            })
    })

    it('Press edit and delete for specific user', function () {
         cy.visit('https://the-internet.herokuapp.com/tables'); 
         cy.get('#table1>tbody>tr').should('have.length', 4); 
         cy.get('#table1>tbody>tr:eq(0)').find('td').should('have.length', 6); 
         cy.get('#table1>tbody>tr').each(function ($row) { 
             cy.wrap($row).find('td:eq(0)').then(($data) => { 
                 if ($data.text() == "Smith") { 
                     cy.log("hey"); 
                     cy.wrap($row).find('td:eq(5)').then(($data) => { 
                         cy.wrap($data).contains('edit').click(); 
                         cy.url().should('include', '#edit'); 
                         cy.wrap($data).contains('delete').click(); 
                         cy.url().should('include', '#delete'); 
                        }) 
                    }; 
                }) 
            }) 
        })

})