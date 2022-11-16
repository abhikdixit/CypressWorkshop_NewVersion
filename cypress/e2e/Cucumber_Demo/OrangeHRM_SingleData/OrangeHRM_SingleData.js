import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../PageObjects_OrangeHRM/LoginPage"
const PLogin = new LoginPage()

Given('User Navigate to Sign On Page', () => {
    PLogin.LaunchURL("https://opensource-demo.orangehrmlive.com/")

})

When('User enters username {string}', uname => {

    //Using PageObject
    // Enter UserName and Password
    PLogin.EnterUserName(uname)
})

When('User enters password {string}', upass => {

    //Using PageObject
    // Enter UserName and Password
    PLogin.EnterPassword(upass)
})

And('User Click on Login Button', () => {
    //cy.get('input#btnLogin').click()
    //Using Page Object Model concept
    PLogin.ClickLoginButton()
})

Then('User should logged in and Dashboard page should display', () => {
    //Verify Dashboard Tab
    //Verify that user can see OrangeHRM title
    cy.url().should('include', 'dashboard')
})

Then('Valid error message should display', () => {
    //Verify Error Message
    PLogin.CaptureErrorMessage()
})