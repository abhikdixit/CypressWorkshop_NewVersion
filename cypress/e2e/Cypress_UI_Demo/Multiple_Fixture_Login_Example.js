// type definitions for Cypress object "cy"
/// <reference types="cypress" />
const availablefixtures = [
  {
      "name": "login",
      "context": "1"
  },
  {
      "name": "login1",
      "context": "2"
  }
]
describe('My First Cypress Test', function() {
    
 //loop through both the fixtues 
 availablefixtures.forEach((afixture) => {
  describe(afixture.context, () => {
  //Mostly used for Setup Part
  before(function(){ 
  cy.fixture(afixture.name).then(function(data)
  {
      this.data=data ;
  })
  })
  it('Visits the OrangeHRM Page and Perform Login Action', function() {
    //Visit the OrnageHRM Website
    cy.visit(this.data.URL);
       // Enter UserName and Password
    cy.get('input#txtUsername').type(this.data.Uname)
    cy.get('input#txtPassword').type(this.data.Upass)
    cy.get('input#btnLogin').click()
    //Verify Dashboard Tab
    cy.get('#menu_dashboard_index > b').should('have.text','Dashboard')
    //Verify Admin Tab and Click
    //cy.get('#menu_admin_viewAdminModule > b').should('have.contain','Admin').click()
   //Verify Admin URL in navigation bar
   //cy.url().should('include','index.php/admin/viewSystemUsers')
   cy.contains('Welcome').click()
   //cy.get('#welcome').click()
   cy.get('a[href="/index.php/auth/logout"]').click()
   cy.url().should('include','index.php/auth/login')
   
  })
  })
})
})