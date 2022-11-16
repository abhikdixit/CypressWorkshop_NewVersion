import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

Given('User click on Admin link', () => {

    cy.get('#menu_admin_viewAdminModule').click()
  })
  
  When('User click on Add Button', () => { 
    cy.get("input[value='Add']").click()
  })
  

  Then('verify that Add User page should display', () => {
    
    //Verify that user can see OrangeHRM title
    cy.get('#UserHeading').should('have.text','Add User')
  })