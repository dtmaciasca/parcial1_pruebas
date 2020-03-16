Feature: Add task in todoist
    As an user I want to authenticate myself within todoist website in order to add my tasks

Scenario Outline: Add task

  Given I go to todoist login screen
    When I login
    And I click Añadir tarea
    And I fill the task with <task>
    And I click in the button Añadir tarea
    Then I expect to see Inbox

    Examples:
      | task  | 
      | Nueva tarea cucumber  | 


    