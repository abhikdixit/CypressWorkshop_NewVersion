 // type definitions for Cypress object "cy"
/// <reference types="cypress" />


    describe('My First Cypress Test', function() {

        before(function () {
            //importing the son file and saving to an alias name
                    cy.fixture('MultiData.json').as('LoginData') 
               })


        it('Visits the OrangeHRM Page and Perform Login Action', function() {

            const uLogin = this.LoginData
            cy.get(uLogin).each((testCase) => {
            //Visit the OrnageHRM Website
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    
    // Enter UserName and Password
    const uname = testCase.uname
     cy.log(uname)
     cy.get("input[placeholder='Username']").type(testCase.uname)
     cy.get("input[placeholder='Password']").type(testCase.password)
     cy.get("button[type='submit']").click()
     //Verify Dashboard Tab
     cy.xpath("//span[text()='PIM']").should('have.text','PIM')
     cy.xpath("//span[text()='Dashboard']").should('have.text','Dashboard')
   //Verify Admin URL in navigation bar
    cy.url().should('include','/web/index.php/dashboard/index')
    //cy.get('#welcome').click()
    cy.xpath("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
    cy.xpath("//a[normalize-space()='Logout']").click()
    cy.url().should('include','web/index.php/auth/login')
  
           
        });
    });
});


/* describe('My First Cypress Test', function() {

    before(function () {
//importing the son file and saving to an alias name
        cy.fixture('MultiData.json').as('LoginData') 
   })

    it('Visits the OrangeHRM Page and Perform Login Action', function() {

     //Using the alias name to this keyword, So we can use globally  
      cy.log('There are ${this.LoginData.Login} .')
     const uLogin = this.LoginData
     //looping your .json data with a new variable giftobject
    cy.get(uLogin).each((userobject) => 
    { 
    //Visit the OrnageHRM Website
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    
   // Enter UserName and Password
    
    cy.get('input#txtUsername').type(this.LoginData.uname)
    cy.get('input#txtPassword').type(this.LoginData.password)
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
   // })
  })
  }) */


  /// Need to watch this video for Multiple data

  //https://www.youtube.com/watch?v=rEJFrj2mZdc