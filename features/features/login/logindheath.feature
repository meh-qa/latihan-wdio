Feature: Dhealth Login - Positive Case

    Scenario Outline: As a user, I can log into dhealth rms

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a page title is <title>

    Examples:
      | username    | password             | title         |
      | superadmin  | D0coB@ndun9_94       | RS Asal Suka  |
