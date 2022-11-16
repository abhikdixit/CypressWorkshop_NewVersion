describe('My First Cypress Test', function () {
  it('Visits the SmartBear Page and Perform Login Action', function () {
    //Visit the SmartBear Website
    cy.visit('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx')

    // Enter UserName and Password

    cy.get('input#ctl00_MainContent_username').type('Tester')
    cy.get('input#ctl00_MainContent_password').type('test')
    cy.get('input#ctl00_MainContent_login_button').click()

    //Click on Order and View All Orders
    cy.get('a[href="Process.aspx"]').click()
    cy.get('a[href="Default.aspx"]').click()
  })
})