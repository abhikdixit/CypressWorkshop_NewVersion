// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Get Text using Each commands', function() {
    it('Visits the OrangeHRM Page and Perform Login Action', function() {
    //Visit the OrnageHRM Website
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    
   // Search for product which start with Ca 
    
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    //Verify that total 4 products get displayed with word start with ca
    cy.get('.product:visible').should('have.length',4)
    cy.get('div[class="products"]').find('.product').should('have.length',4)
    //Parent and child chaining using Find command
    cy.get('.products').find('.product').should('have.length',4)
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

    //Add Product to Cart based on user input using Text
    cy.get('.products').find('.product').each(($el, index, $list) => {
    // Find Text of all products and store in variable, then check if matces based on user input
    const VegProd=$el.find('h4.product-name').text()
    //Lets Write the info to Json file and txt file
    //cy.writeFile("./cypress/fixtures/productfile.json", { name: VegProd}, { flag: 'a+' });
    //cy.writeFile("./cypress/fixtures/productfile.json", { name: VegProd});
    cy.writeFile("./cypress/fixtures/productfile.txt", { name: VegProd}, { flag: 'a+' });
   // cy.fixture(product.json).then((product) => {
    if(VegProd.includes('Cashew'))
    {
      cy.writeFile("./cypress/fixtures/productfile.json", { name: VegProd});
      $el.find('button').click()
    }
  //  })
  })
})

it('Validate the content of both text and JSON file using readFile', function () {
  cy.readFile('cypress/fixtures/productfile.txt').should('contain', 'Cashews - 1 Kg')
  cy.fixture('productfile.json').then((prod)=>
  {
    expect(prod.name).to.eq('Cashews - 1 Kg')
  })
})

it('Search for product which captured using writeFile', function() {
  //Visit the OrnageHRM Website
  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  
 // Search for product which start with Ca 
 cy.fixture('productfile').then((prod)=>
 {
  cy.get('.search-keyword').type(prod.name)
  cy.wait(2000)
 })

})
})