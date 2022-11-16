#Author: Abhinay Dixit
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
Feature: To Test Orange HRM Sign On Functionality
   
   Background: Launching URL
      Given User Navigate to Sign On Page
      
   Scenario: Successful Login with Valid Credentials in OrangeHRM app
      And I see "OrangeHRM" in the title
      When User enters username "Admin"
      And User enters password "admin123"
      And User Click on Login Button
      Then User should logged in and Dashboard page should display
      Then User see "/dashboard" url
   #@focus
   Scenario: Un-Successful Login with In-valid Credentials in OrangeHRM app
      When User enters username "Admin1"
      And User enters password "admin1234"
      And User Click on Login Button
      Then Valid error message should display