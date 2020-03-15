describe('Agregar proyecto', function() {
    it('Agregar proyecto', function() {
        cy.visit('https://todoist.com/app#start')
        cy.get(".standalone_page").find('input[name="email"]').click().type("tati@test.com")
        cy.get('.standalone_page').find('input[name="password"]').click().type("pruebas1234")
        cy.get('.standalone_page').find('button[class="submit_btn ist_button ist_button_red sel_login"]').click()
        cy.wait(1900)
        cy.get('div[id="left_menu"]').find('button[data-track="navigation|projects_quick_add"]').click()
        cy.get('form').find('input[id="edit_project_modal_field_name"]').click().type("Nuevo proyecto")
        cy.get('form').find('button[class="color_dropdown_toggle form_field_control"]').click()
        cy.get('div[id="dropdown-select-3-popup"]').find('li[id="dropdown-select-3-option-41"]').click()
        cy.get('form').find('div[class="form_field form_field_inline"]').click()
        cy.get('form').find('button[class="ist_button ist_button_red"]').click()
        cy.get('.left_menu').contains('Nuevo proyecto')
    })
})

describe('No agregue un proyecto sin nombre', function() {
    it('No agregue un proyecto sin nombre', function() {
      cy.visit('https://todoist.com/app#start')
      cy.get(".standalone_page").find('input[name="email"]').click().type("tati@test.com")
      cy.get('.standalone_page').find('input[name="password"]').click().type("pruebas1234")
      cy.get('.standalone_page').find('button[class="submit_btn ist_button ist_button_red sel_login"]').click()
      cy.wait(1900)
      cy.get('div[id="left_menu"]').find('button[data-track="navigation|projects_quick_add"]').click()
      cy.get('form').find('button[aria-disabled="true"]')
    })
})
/*
describe('Editar proyecto', function() {
    it('Editar proyecto', function() {
        cy.visit('https://todoist.com/app#start')
        cy.get(".standalone_page").find('input[name="email"]').click().type("tati@test.com")
        cy.get('.standalone_page').find('input[name="password"]').click().type("pruebas1234")
        cy.get('.standalone_page').find('button[class="submit_btn ist_button ist_button_red sel_login"]').click()
        cy.wait(1900)
        cy.get('div[id="left_menu"]').find('button[data-track="navigation|projects_quick_add"]').click()
        cy.get('form').find('input[id="edit_project_modal_field_name"]').click().type("Proyecto a editar")
        cy.get('form').find('button[class="color_dropdown_toggle form_field_control"]').click()
        cy.get('div[id="dropdown-select-3-popup"]').find('li[id="dropdown-select-3-option-42"]').click()
        cy.get('form').find('button[class="ist_button ist_button_red"]').click()
        cy.contains('Proyecto a editar').click()
        cy.get('.left_menu').get('ul').children('.current').find('table[class="item_table"]').find('td[class="menu"]').click({force: true})
        cy.get('div[class="ist_menu"]').get('tr[class="project_archive_action project_inbox_action menu_item"]').find('td[data-track="projects|menu_edit"]').click()
        cy.get('form').find('input[id="edit_project_modal_field_name"]').click().type("Nombre editado")
        cy.get('div[id="dropdown-select-3-popup"]').find('li[id="dropdown-select-3-option-33"]').click()
        cy.get('button[class="ist_button ist_button_red"]').click()
        cy.get('div[id="left_menu"]').not('Proyecto a eliminar')
    })
})*/

describe('Eliminar proyecto', function() {
    it('Eliminar proyecto', function() {
        cy.visit('https://todoist.com/app#start')
        cy.get(".standalone_page").find('input[name="email"]').click().type("tati@test.com")
        cy.get('.standalone_page').find('input[name="password"]').click().type("pruebas1234")
        cy.get('.standalone_page').find('button[class="submit_btn ist_button ist_button_red sel_login"]').click()
        cy.wait(1900)
        cy.get('div[id="left_menu"]').find('button[data-track="navigation|projects_quick_add"]').click()
        cy.get('form').find('input[id="edit_project_modal_field_name"]').click().type("Proyecto a eliminar")
        cy.get('form').find('button[class="ist_button ist_button_red"]').click()
        cy.contains('Proyecto a eliminar').click()
        cy.get('.left_menu').get('ul').children('.current').find('table[class="item_table"]').find('td[class="menu"]').click({force: true})
        cy.get('span[id="menu_delete_text"]').click()
        cy.get('button[class="ist_button ist_button_red"]').click()
        cy.get('div[id="left_menu"]').not('Proyecto a eliminar')
    })
})

describe('Ordenar tareas por fecha', function() {
    it('Ordenar tareas por fecha', function() {
        cy.visit('https://todoist.com/app#start')
        cy.get(".standalone_page").find('input[name="email"]').click().type("tati@test.com")
        cy.get('.standalone_page').find('input[name="password"]').click().type("pruebas1234")
        cy.get('.standalone_page').find('button[class="submit_btn ist_button ist_button_red sel_login"]').click()
        cy.wait(1900)
        cy.get('div[id="left_menu"]').find('li[data-type="project_list_item"]').contains('Te damos la bienvenida').click()
        cy.get('ul[class="section_list"]').find('a[class="action action_add_item"]').first().click()
        cy.get('form[class="item_editor"]').find('div[class="richtextinput item_editor_input"]').type('Tarea uno')
        cy.get('button[class="item_editor_assign_due"]').click()
        cy.get('div[class=" popper"]').find('div[class="scheduler"]').find('input[placeholder="Introduce una fecha de vencimiento"]').type('Mar 24 {enter}')
        cy.get('button[class="item_editor_submit ist_button ist_button_red"]').click({force: true})
        cy.get('form[class="item_editor"]').find('div[class="richtextinput item_editor_input"]').type('Tarea dos')
        cy.get('button[class="item_editor_assign_due"]').click()
        cy.get('div[class=" popper"]').find('div[class="scheduler"]').find('input[placeholder="Introduce una fecha de vencimiento"]').type('Mar 15 {enter}')
        cy.get('button[class="item_editor_submit ist_button ist_button_red"]').click({force: true})
        cy.get('div[id="editor"]').find('button[class="gear_icon icon"]').click()
        cy.get('ul[class="section_list"]').get('tr[class="menu_item"]').find('td[data-track="project|actions_sort_by_date"]').click()
        cy.get('ul[class="section_list"]').find('li[data-type="section"]').children().eq(0).find('ul[class="items"]').children().find('div[class="task_item_details"]').eq(0).contains('Tarea dos')
    })
})

describe('Ordenar tareas por prioridad', function() {
    it('Ordenar tareas por prioridad', function() {
        cy.visit('https://todoist.com/app#start')
        cy.get(".standalone_page").find('input[name="email"]').click().type("tati@test.com")
        cy.get('.standalone_page').find('input[name="password"]').click().type("pruebas1234")
        cy.get('.standalone_page').find('button[class="submit_btn ist_button ist_button_red sel_login"]').click()
        cy.wait(1900)
        cy.get('div[id="left_menu"]').find('li[data-type="project_list_item"]').contains('Te damos la bienvenida').click()
        cy.get('ul[class="section_list"]').find('a[class="action action_add_item"]').first().click()
        cy.get('form[class="item_editor"]').find('div[class="richtextinput item_editor_input"]').type('Tarea prioridad 1')
        cy.get('button[aria-label="Establecer prioridad"]').click()
        cy.get('div[class="dropdown_select--popup priority_picker"]').find('ul').children().find('div[class="priority_picker_item"]').contains('Prioridad 1').click()
        cy.get('button[class="item_editor_submit ist_button ist_button_red"]').click({force: true})
        cy.get('form[class="item_editor"]').find('div[class="richtextinput item_editor_input"]').type('Tarea prioridad 3')
        cy.get('button[aria-label="Establecer prioridad"]').click()
        cy.get('div[class="dropdown_select--popup priority_picker"]').find('ul').children().find('div[class="priority_picker_item"]').contains('Prioridad 3').click()
        cy.get('button[class="item_editor_submit ist_button ist_button_red"]').click({force: true})
        cy.get('div[id="editor"]').find('button[class="gear_icon icon"]').click()
        cy.get('ul[class="section_list"]').get('tr[class="menu_item"]').find('td[data-track="project|actions_sort_by_priority"]').click()
        cy.get('ul[class="section_list"]').find('li[data-type="section"]').children().eq(0).find('ul[class="items"]').children().find('div[class="task_item_details"]').eq(0).contains('Tarea prioridad 1')
    })
})

describe('Ordenar tareas por nombre', function() {
    it('Ordenar tareas por nombre', function() {
        cy.visit('https://todoist.com/app#start')
        cy.get(".standalone_page").find('input[name="email"]').click().type("tati@test.com")
        cy.get('.standalone_page').find('input[name="password"]').click().type("pruebas1234")
        cy.get('.standalone_page').find('button[class="submit_btn ist_button ist_button_red sel_login"]').click()
        cy.wait(1900)
        cy.get('div[id="left_menu"]').find('li[data-type="project_list_item"]').contains('Te damos la bienvenida').click()
        cy.get('ul[class="section_list"]').find('a[class="action action_add_item"]').first().click()
        cy.get('form[class="item_editor"]').find('div[class="richtextinput item_editor_input"]').type('Tarea programada')
        cy.get('button[class="item_editor_submit ist_button ist_button_red"]').click({force: true})
        cy.get('form[class="item_editor"]').find('div[class="richtextinput item_editor_input"]').type('Otra tarea')
        cy.get('button[class="item_editor_submit ist_button ist_button_red"]').click({force: true})
        cy.get('div[id="editor"]').find('button[class="gear_icon icon"]').click()
        cy.get('ul[class="section_list"]').get('tr[class="menu_item"]').find('td[data-track="project|actions_sort_by_name"]').click()
        cy.get('ul[class="section_list"]').find('li[data-type="section"]').children().eq(0).find('ul[class="items"]').children().find('div[class="task_item_details"]').eq(0).contains('Otra tarea')
    })
})

describe('Añadir sección', function() {
    it('Añadir sección', function() {
        cy.visit('https://todoist.com/app#start')
        cy.get(".standalone_page").find('input[name="email"]').click().type("tati@test.com")
        cy.get('.standalone_page').find('input[name="password"]').click().type("pruebas1234")
        cy.get('.standalone_page').find('button[class="submit_btn ist_button ist_button_red sel_login"]').click()
        cy.wait(1900)
        cy.get('div[id="left_menu"]').contains('Te damos la bienvenida').click()
        cy.get('div[class="list_editor"]').find('button[class="gear_icon icon"]').click()
		    cy.get('div[class="ist_menu"]').find('tr[class="menu_item"]').eq(0).click()
		    cy.get('div[class="section"]').find('input[class="name"]').click().type('Nueva sección')
		    cy.get('div[class="section"]').find('a[class="ist_button ist_button_red"]').click()
		    cy.contains('Nueva sección')
    })
})

describe('No realice nada cuando nombre de la sección va vacio', function() {
    it('No realice nada cuando nombre de la sección va vacio', function() {
        cy.visit('https://todoist.com/app#start')
        cy.get(".standalone_page").find('input[name="email"]').click().type("tati@test.com")
        cy.get('.standalone_page').find('input[name="password"]').click().type("pruebas1234")
        cy.get('.standalone_page').find('button[class="submit_btn ist_button ist_button_red sel_login"]').click()
        cy.wait(1900)
        cy.get('div[id="left_menu"]').contains('Te damos la bienvenida').click()
        cy.get('div[class="list_editor"]').find('button[class="gear_icon icon"]').click()
		    cy.get('div[class="ist_menu"]').find('tr[class="menu_item"]').eq(0).click()
		    cy.get('div[class="section"]').find('input[class="name"]').click()
		    cy.get('div[class="section"]').find('a[class="ist_button ist_button_red"]').click()
		    cy.get('div[class="section"]').find('input[class="name"]').should('have.length', 1)
    })
})

describe('Mostrar/Ocultar tarea programada', function() {
    it('Mostrar/Ocultar tarea programada', function() {
        cy.visit('https://todoist.com/app#start')
        cy.get(".standalone_page").find('input[name="email"]').click().type("tati@test.com")
        cy.get('.standalone_page').find('input[name="password"]').click().type("pruebas1234")
        cy.get('.standalone_page').find('button[class="submit_btn ist_button ist_button_red sel_login"]').click()
        cy.wait(1900)
        cy.get('div[id="left_menu"]').find('li[data-type="project_list_item"]').contains('Te damos la bienvenida').click()
        cy.get('ul[class="section_list"]').find('a[class="action action_add_item"]').first().click()
        cy.get('form[class="item_editor"]').find('div[class="richtextinput item_editor_input"]').type('Tarea uno')
        cy.get('button[class="item_editor_submit ist_button ist_button_red"]').click({force: true})
        cy.get('form[class="item_editor"]').find('div[class="richtextinput item_editor_input"]').type('Tarea dos')
        cy.get('button[class="item_editor_submit ist_button ist_button_red"]').click({force: true})
        cy.get('ul[class="section_list"]').find('li[data-type="section"]').children().eq(0).find('ul[class="items"]').children().find('div[class="task_item_details"]').eq(0).find('div[class="ist_checkbox"]').click()
        cy.get('ul[class="section_list"]').find('li[data-type="section"]').children().eq(0).find('ul[class="items"]').children().find('div[class="task_item_details"]').eq(1).find('div[class="ist_checkbox"]').click()
        cy.get('div[id="editor"]').find('button[class="gear_icon icon"]').click()
        cy.get('ul[class="section_list"]').get('tr[class="menu_item"]').find('td[data-track="project|action_show_completed"]').eq(0).click()
        cy.wait(1900)
        cy.get('ul[class="section_list"]').find('div[class="list_holder"]').first().find('div[class="moreItemsHint_icon"]')
        cy.get('div[id="editor"]').find('button[class="gear_icon icon"]').click()
        cy.get('ul[class="section_list"]').get('tr[class="menu_item"]').find('td[data-track="project|action_show_completed"]').eq(1).click()
        cy.get('ul[class="section_list"]').find('div[class="list_holder"]').first().should('not.have.class', 'moreItemsHint_icon')
    })
})

describe('Bandeja de entrada', function() {
    it('Bandeja de entrada', function() {
        cy.visit('https://todoist.com/app#start')
        cy.get(".standalone_page").find('input[name="email"]').click().type("tati@test.com")
        cy.get('.standalone_page').find('input[name="password"]').click().type("pruebas1234")
        cy.get('.standalone_page').find('button[class="submit_btn ist_button ist_button_red sel_login"]').click()
        cy.wait(1900)
        cy.get('div[id="left_menu"]').contains('Bandeja de entrada').click()
        cy.get('ul[class="section_list"]').find('a[class="action action_add_item"]').first().click({force: true})
        cy.get('div[id="editor"]').find('div[class="richtextinput item_editor_input"]').type('Tarea desde bandeja de entrada')
        cy.get('button[class="item_editor_submit ist_button ist_button_red"]').click({force: true})
        cy.get('div[class="task_item_details"]').children().contains('Tarea desde bandeja de entrada')
        cy.get('ul[class="section_list"]').find('a[class="action action_add_item"]').first().click({force: true})
        cy.get('div[id="editor"]').find('div[class="richtextinput item_editor_input"]').type('Tarea para la bienvenida #Bienvenida')
        cy.get('div[class="dialog-content"]').find('ul[class="richtextinput_suggestions"]').find('li').click()
        cy.get('button[class="item_editor_submit ist_button ist_button_red"]').click({force: true})
        cy.get('div[id="left_menu"]').find('li[data-type="project_list_item"]').contains('Te damos la bienvenida').click()
        cy.contains('Tarea para la bienvenida')
      })
})

describe('Hoy', function() {
    it('Hoy', function() {
        const hoy = Cypress.moment().format('MMM DD')

        cy.visit('https://todoist.com/app#start')
        cy.get(".standalone_page").find('input[name="email"]').click().type("tati@test.com")
        cy.get('.standalone_page').find('input[name="password"]').click().type("pruebas1234")
        cy.get('.standalone_page').find('button[class="submit_btn ist_button ist_button_red sel_login"]').click()
        cy.wait(1900)
        cy.get('div[id="left_menu"]').contains('Te damos la bienvenida').click()
        cy.get('ul[class="section_list"]').find('a[class="action action_add_item"]').first().click({force: true})
        cy.get('div[id="editor"]').find('div[class="richtextinput item_editor_input"]').type('Tarea de hoy')
        cy.get('button[class="item_editor_assign_due"]').click()
        cy.get('div[class=" popper"]').find('div[class="scheduler"]').find('input[placeholder="Introduce una fecha de vencimiento"]').type(hoy +' {enter}')
        cy.get('button[class="item_editor_submit ist_button ist_button_red"]').click({force: true})
        cy.get('div[id="left_menu"]').contains('Hoy').click()
        cy.contains('Tarea de hoy')
    })
})

describe('Próximos 7 días', function() {
    it('Próximos 7 días', function() {
        const hoy = Cypress.moment().format('MMM DD')

        cy.visit('https://todoist.com/app#start')
        cy.get(".standalone_page").find('input[name="email"]').click().type("tati@test.com")
        cy.get('.standalone_page').find('input[name="password"]').click().type("pruebas1234")
        cy.get('.standalone_page').find('button[class="submit_btn ist_button ist_button_red sel_login"]').click()
        cy.wait(1900)
        cy.get('div[id="left_menu"]').contains('Te damos la bienvenida').click()
        cy.get('ul[class="section_list"]').find('a[class="action action_add_item"]').first().click({force: true})
        cy.get('div[id="editor"]').find('div[class="richtextinput item_editor_input"]').type('Tarea nueva para hoy')
        cy.get('button[class="item_editor_assign_due"]').click()
        cy.get('div[class=" popper"]').find('div[class="scheduler"]').find('input[placeholder="Introduce una fecha de vencimiento"]').type(hoy +' {enter}')
        cy.get('button[class="item_editor_submit ist_button ist_button_red"]').click({force: true})
        cy.get('div[id="left_menu"]').contains('Próximos 7 días').click()
        cy.get('h2[class="subsection_header"]').find('small').contains(hoy)
        cy.contains('Tarea nueva para hoy')
    })
})

describe('Ver notificaciones', function() {
    it('Ver notificaciones', function() {
        cy.visit('https://todoist.com/app#start')
        cy.get(".standalone_page").find('input[name="email"]').click().type("tati@test.com")
        cy.get('.standalone_page').find('input[name="password"]').click().type("pruebas1234")
        cy.get('.standalone_page').find('button[class="submit_btn ist_button ist_button_red sel_login"]').click()
        cy.wait(1900)
        cy.get('div[id="top_icons"]').find('span[id="notifications_counter"]').click()
        cy.get('div[id="GB_window"]').contains('Notificaciones')
        cy.get('div[id="GB_window"]').find('a[class="mark_all_as_read"]').click()
        cy.get('div[id="GB_window"]').find('div[id="notifications_holder"]').find('ul').children().should('not.have.class', 'unread')
    })
})

describe('Buscar rápido cuando hay resultados', function() {
    it('Buscar rápido cuando hay resultados', function() {
        cy.visit('https://todoist.com/app#start')
        cy.get(".standalone_page").find('input[name="email"]').click().type("tati@test.com")
        cy.get('.standalone_page').find('input[name="password"]').click().type("pruebas1234")
        cy.get('.standalone_page').find('button[class="submit_btn ist_button ist_button_red sel_login"]').click()
        cy.wait(1900)
        cy.get('input[class="quick_find fixed_pos"]').click().type('bienvenida')
        cy.get('div[id="left_menu"]').contains('Te damos la bienvenida').click()
    })
})

describe('Buscar rápido cuando NO hay resultados', function() {
    it('Buscar rápido cuando NO hay resultados', function() {
        cy.visit('https://todoist.com/app#start')
        cy.get(".standalone_page").find('input[name="email"]').click().type("tati@test.com")
        cy.get('.standalone_page').find('input[name="password"]').click().type("pruebas1234")
        cy.get('.standalone_page').find('button[class="submit_btn ist_button ist_button_red sel_login"]').click()
        cy.wait(1900)
        cy.get('input[class="quick_find fixed_pos"]').click().type('prueba')
        cy.contains('Mostrar más resultados').click()
        cy.contains('No hay resultados para "prueba"')
    })
})

describe('Buscar rápido cuando hay más de un resultado', function() {
    it('Buscar rápido cuando hay más de un resultado', function() {
        cy.visit('https://todoist.com/app#start')
        cy.get(".standalone_page").find('input[name="email"]').click().type("tati@test.com")
        cy.get('.standalone_page').find('input[name="password"]').click().type("pruebas1234")
        cy.get('.standalone_page').find('button[class="submit_btn ist_button ist_button_red sel_login"]').click()
        cy.wait(1900)
        cy.get('input[class="quick_find fixed_pos"]').click().type('Proyecto')
        cy.contains('Mostrar más resultados').click()
        cy.get('ul[class="items"]').children().should('have.length', 2)
    })
})

describe('Cerrar sesión', function() {
    it('Cerrar sesión', function() {
        cy.visit('https://todoist.com/app#start')
        cy.get(".standalone_page").find('input[name="email"]').click().type("tati@test.com")
        cy.get('.standalone_page').find('input[name="password"]').click().type("pruebas1234")
        cy.get('.standalone_page').find('button[class="submit_btn ist_button ist_button_red sel_login"]').click()
        cy.wait(1900)
        cy.get('div[id="top_icons"]').find('span[class="menu_icon fixed_pos"]').click()
        cy.get('div[class="usermenu__container"]').find('div[class="usermenu__row"]').contains('Cerrar sesión').click()
        cy.contains('Organízalo todo')
        cy.contains('con Todoist')
    })
})

describe('Tu productividad', function() {
    it('Tu productividad', function() {
        cy.visit('https://todoist.com/app#start')
        cy.get(".standalone_page").find('input[name="email"]').click().type("tati@test.com")
        cy.get('.standalone_page').find('input[name="password"]').click().type("pruebas1234")
        cy.get('.standalone_page').find('button[class="submit_btn ist_button ist_button_red sel_login"]').click()
        cy.wait(1900)
        cy.get('div[id="top_icons"]').find('span[class="completed_pie_stat"]').click()
        cy.get('div[class="GB_Window_holder shadow"]').contains('Tu productividad')
        cy.get('div[class="GB_Window_holder shadow"]').contains('Semanal').click()
        cy.get('div[class="GB_Window_holder shadow"]').contains('Los objetivos y las rachas semanales son características Premium. ')
        cy.get('div[class="GB_Window_holder shadow"]').contains('Karma').click()
        cy.get('div[class="GB_Window_holder shadow"]').contains('Tendencia del Karma').click()
    })
})
