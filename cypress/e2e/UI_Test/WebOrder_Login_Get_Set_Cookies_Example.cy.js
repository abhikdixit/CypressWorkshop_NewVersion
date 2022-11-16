describe('WebOrder E2E Functionality', () => {
  it('Login to Web Order', () => {
    cy.visit('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx')
    cy.get('#ctl00_MainContent_username').type("Tester")
    cy.get('#ctl00_MainContent_password').type("test")
    cy.get('#ctl00_MainContent_login_button').click()
    //Verify that user has logged in
    cy.get('h1').should('have.text','Web Orders')
  })
  it('Create Order', () => {

    cy.getCookiesValue()
    .then((returned_value) => {
        cy.log("Cookies Value = " + returned_value)
        cy.setCookie('ASP.NET_SessionId',returned_value)
    })
    // Create Order and Verify Order
    cy.xpath("//a[text()='Order']").click()
    cy.get('#ctl00_MainContent_fmwOrder_ddlProduct').select("FamilyAlbum")
    cy.get('#ctl00_MainContent_fmwOrder_txtQuantity').type(1)
    cy.get('#ctl00_MainContent_fmwOrder_txtName').type("Abhishek")
    cy.get('#ctl00_MainContent_fmwOrder_TextBox2').type("AVA Road")
    cy.get('#ctl00_MainContent_fmwOrder_TextBox3').type("Hyderabad")
    cy.get('#ctl00_MainContent_fmwOrder_TextBox5').type(500001)
    cy.get('#ctl00_MainContent_fmwOrder_cardList_1').click()
    cy.get('#ctl00_MainContent_fmwOrder_TextBox6').type(1234567890)
    cy.get('#ctl00_MainContent_fmwOrder_TextBox1').type("06/25")
    cy.get('#ctl00_MainContent_fmwOrder_InsertButton').click()
    cy.get('strong').should('have.text', '\n                    New order has been successfully added.\n                ')
    
    //created order verification
    cy.get('#ctl00_menu > :nth-child(1) > a').click()
    cy.get(':nth-child(2) > :nth-child(11)').should('have.text', "1234567890")
  })
it('Click Web Order', () => {
  cy.getCookiesValue()
  .then((returned_value) => {
      cy.log("Cookies Value = " + returned_value)
      cy.setCookie('ASP.NET_SessionId',returned_value)
  })
    cy.get("a[href='Default.aspx']").should('have.text','View all orders').click()
    cy.url().should('include','/WebOrders/Default.aspx')
})
it('Logout from Web Order', () => {
    //logout verification
    cy.get('#ctl00_logout').click()
    cy.get('#ctl00_MainContent_login_button').should('contain.value', "Login")
})
  })
