Feature: User Authentication tests

  Background:
    Given I enter valid credentials
  

  Scenario Outline: Login should be success
    Given I log in as "<username>" with ID <score> and active status "<status>"
    When I have 1 <status> "<dynamicWord>" 
    When I have 2 <status> "<dynamicWord>"
    Then I should see the dashboard
  Examples:
  | username    | score |  status  | dynamicWord |
  | raja        | 0.23  |  true    | apple       |
  | harish      | 2     |  false   | banana      |
  | kathiravan  | 0     |  false   | orange      |





  # Scenario: Login should be success
  #   And User enter the username as "ortoni11"
  #   And User enter the password as "Pass1234"
  #   When User click on the login button
  #   Then Login should be success

  # Scenario: Login should not be success
  #   Given User enter the username as "koushik"
  #   Given User enter the password as "Passkoushik"
  #   When User click on the login button
  #   But Login should fail
