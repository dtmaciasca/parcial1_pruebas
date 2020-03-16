Feature: Edit task in todoist
    As an user I want to authenticate myself within todoist website in order to edit my tasks

Scenario Outline: Edit task

  Given I go to todoist login screen
    When I login
    And I click Añadir tarea
    And I fill the task with <task1>
    And I click in the button Añadir tarea
    And I click Editar tarea
    And I fill the task with <task2>
    And I click in the button Añadir tarea
    Then I expect to see cucumberCUCUMBER

    Examples:
      | task1  | task2| 
      |   Nueva tarea cucumber   | CUCUMBER  | 
