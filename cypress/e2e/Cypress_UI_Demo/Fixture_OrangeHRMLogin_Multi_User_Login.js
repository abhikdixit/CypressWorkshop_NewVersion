
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Fetching Data from Fixture file->Login.json', function() {
    
  //Use the cy.fixture() method to pull data from fixture file
before(function () {
cy.fixture('MultiData').then(function (data) {
  this.data = data;
})
})


it('Visits the OrangeHRM Page and Perform Login Action', function() {
//Visit the OrnageHRM Website
for(var i = 0; i < this.data.Login.length; i++) {
  cy.visit(this.data.URL);



// Enter UserName and Password
cy.log("USER :"+i+1)
cy.get('input#txtUsername').type(this.data.Login[i].uname)
cy.get('input#txtPassword').type(this.data.Login[i].password)
cy.get('input#btnLogin').click()
//Verify Dashboard Tab
cy.get('#menu_dashboard_index > b').should('have.text','Dashboard')
//Verify Admin Tab and Click
cy.get('#menu_admin_viewAdminModule > b').should('have.contain','Admin').click()
//Verify Admin URL in navigation bar
cy.url().should('include','index.php/admin/viewSystemUsers')
cy.contains('Welcome').click()
//cy.get('#welcome').click()
cy.get('a[href="/index.php/auth/logout"]').click()
cy.url().should('include','index.php/auth/login')
}
})
})