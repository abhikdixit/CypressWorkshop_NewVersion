import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../PageObjects_OrangeHRM/LoginPage"
const PLogin=new LoginPage()


Given('User Navigate to Sign On Page', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    //Using POM Concept
    //Visit the OrnageHRM Website
    //PLogin.LaunchURL("https://opensource-demo.orangehrmlive.com/");

  });
  
  When('User enters username and password', () => { 
   // Enter UserName and Password
   cy.get('input#txtUsername').type('Admin')
   cy.get('input#txtPassword').type('admin123')
   //Using PageObject
          // Enter UserName and Password
         // PLogin.EnterUserName('Admin')
         // PLogin.EnterPassword('admin123')
  })
  
  And('User Click on Login Button', () => {
    cy.get('input#btnLogin').click()
    //Using Page Object Model concept
    //PLogin.ClickLoginButton()
  });
  
  Then('User should logged in and Dashboard page should display', () => {
    //Verify Dashboard Tab
    cy.get('#menu_dashboard_index > b').should('have.text','Dashboard')
    //Using POM Concept
    
    //Verify that user can see OrangeHRM title
    cy.title().should('be.equal','OrangeHRM')
  });