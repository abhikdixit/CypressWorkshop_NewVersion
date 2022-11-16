// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('To Handle Date Calendar', function () {
    it('Visits the PHP Tarvels website', function () {
        //Visit the HDFC Netbanking Website
        cy.visit("https://jqueryui.com/datepicker/");

        //cy.get('#datepicker').click()
        cy.get('.demo-frame').then(function ($iframe){
            const iframedatepicker = $iframe.contents().find('#datepicker')
            cy.wrap(iframedatepicker).click()
            const iframedate = $iframe.contents().find("table[class='ui-datepicker-calendar']")
            iframedate.each(($el,index,$list)=>{
                const Datename = $el.text()
                //cy.log(Datename)
                if(Datename=='17')
                {
                    cy.wrap(Datename).click()
                }
        })

    })
})
})