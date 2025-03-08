Feature: Login

  Scenario: Successful login
    Given I enter valid credentials
    When I click login
    Then I should see the dashboard