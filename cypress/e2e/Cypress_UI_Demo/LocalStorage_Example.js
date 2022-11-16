// cypress/integration/quickSearch.spec.js
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Last searched terms', () => {
  it('shows the last three searched terms for quick searching', () => {
    const termsToSearchFor = [
      'foo',
      'bar',
      'baz'
    ]

    cy.visit('https://www.google.co.in/')

    termsToSearchFor.forEach(term => {
      cy.get("input[title='Search']")
        .should('be.visible')
        .type(`${term}{enter}`)
    })

    cy.getLocalStorage('lastSearches')
      .then($lastSearches => {
        expect($lastSearches.includes(termsToSearchFor[0])).to.equal(true)
        expect($lastSearches.includes(termsToSearchFor[1])).to.equal(true)
        expect($lastSearches.includes(termsToSearchFor[2])).to.equal(true)
      })
  })
})
