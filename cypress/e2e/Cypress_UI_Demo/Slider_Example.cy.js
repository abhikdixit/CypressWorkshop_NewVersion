// type definitions for Cypress object "cy"
/// <reference types="cypress" />
it("using arrow keys", () => {
    cy.visit("https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo");

    cy.xpath("//p[normalize-space()='Progress Bar & Sliders']").click()
    cy.xpath("//a[normalize-space()='Drag & Drop Sliders']").click()
      cy.get('.sp__range-success > .sp__range').invoke('val','15').trigger('change')
      .should('have.value', 15)
  
      cy.get('#rangeSuccess').invoke('val','95').trigger('change')
      .should('have.value', 95)
  
  })