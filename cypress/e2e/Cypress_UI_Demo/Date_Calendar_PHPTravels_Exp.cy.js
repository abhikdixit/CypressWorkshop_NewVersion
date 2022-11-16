// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('To Handle Date Calendar', function () {
    it('Visits the PHP Tarvels website', function () {
        //Visit the HDFC Netbanking Website
        cy.visit("https://www.phptravels.net/home");
        //Click on Check In Box
        cy.xpath("//input[@id='checkin']").click()
        cy.xpath("(//div[@class='datepicker--cells datepicker--cells-days'])[1]/div")
            .each(($el,index,$list)=>{

                var dateName = $el.text()
                if(dateName=='27')
                {
                    cy.wrap($el).click()
                }
                
            })
})
})