#Author: Abhinay Dixit
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
Feature: To Test Orange HRM Sign On Functionality

  Scenario: Successful Login with Valid Credentials in OrangeHRM app
 	Given User Navigate to Sign On Page
    When User enters username and password
 	And User Click on Login Button
  Then User should logged in and Dashboard page should display