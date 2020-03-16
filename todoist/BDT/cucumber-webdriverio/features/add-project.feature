Feature: Add project
    As an user I want to add a new project

Scenario Outline: Add project success

  Given I go to todoist
    When I fill with <email> and <password>
    And I try to login
    And I want to add a project
    And I fill with <nombre>, <color>, <favorito>
    And I try to add project
    Then I expect to see a project success <nombre>

    Examples:
      |email         |password   | nombre            | color                       | favorito |
      |tati@test.com |pruebas1234| Nuevo             | dropdown-select-3-option-41 | false    |
