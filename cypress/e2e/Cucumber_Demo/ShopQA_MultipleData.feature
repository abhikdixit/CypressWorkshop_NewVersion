#Author: Abhi
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
Feature: To Test TestComplete Sign On Functionality

  Scenario Outline: Successful Login with Valid Credentials in ShopQA App
  Given User Navigate to Sign On Page in ShopQA
  When User enter <username> and <password>
  #With Multiple Data
  Examples: With Multiple Data
    | username | password |
	| abhikdixit | Testing@2212 |
    | abhidixit | Cucumber@2212 |
  And User Click on Login Button
  Then User should logged in and Dashboard link should display