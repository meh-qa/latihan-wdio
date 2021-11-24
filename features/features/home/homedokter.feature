Feature: Dhealth Home - Positive

    Background: Open Dhealth Login Page
    Given I am on the login page

    Scenario Outline: As a doctor, I can see dhealth rms homepage
    When I login with <username> and <password>
    And I can see SOAP modal
    And I close SOAP modal
    Then I can see all menu on homepage

    Examples:
      | username    | password             |
      | superadmin  | D0coB@ndun9_94       |
      