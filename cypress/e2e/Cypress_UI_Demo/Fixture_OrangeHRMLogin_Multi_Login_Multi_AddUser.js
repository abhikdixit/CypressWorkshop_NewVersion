// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Fetching Data from Fixture file->Login.json', function() {
    
  //Use the cy.fixture() method to pull data from fixture file
before(function () {
cy.fixture('MultiLogin_AddUsers').then(function (data) {
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
cy.get('#menu_admin_viewAdminModule > b').should('have.text','Admin').click()
cy.wait(2000)
cy.get('#btnAdd').click()
cy.get('#systemUser_userType').select('Admin')
cy.get('#systemUser_employeeName_empName').type(this.data.Login[i].adduser.ename)
cy.get('#systemUser_userName').type(this.data.Login[i].adduser.uname)
cy.get('#systemUser_password').type(this.data.Login[i].adduser.password)
cy.get('#systemUser_confirmPassword').type(this.data.Login[i].adduser.cpassword)

cy.get('#btnSave').click()
cy.wait(2000)
cy.contains('Welcome').click()
//cy.get('#welcome').click()
cy.get('a[href="/index.php/auth/logout"]').click()
cy.url().should('include','index.php/auth/login')
}
})
})