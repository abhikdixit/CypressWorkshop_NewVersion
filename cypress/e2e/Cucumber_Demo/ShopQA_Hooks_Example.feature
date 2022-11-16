#Author: Abhi
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
Feature: To Test TestComplete Sign On Functionality

  Scenario: Successful Login with Valid Credentials in ShopQA App
  #Launching URL fetched from common.js file
  #Given User Navigate to Sign On Page in ShopQA
  When User enter
  #With Single Data
    | username | password |
	| abhikdixit | Testing@2212 |
    
  And User Click on Login Button
  Then User should logged in and Dashboard link should display
  
    Scenario: Successful LogOut
    #Logout fetched from common.js file
    #When User LogOut from the Application
    Then Message displayed LogOut Successfully