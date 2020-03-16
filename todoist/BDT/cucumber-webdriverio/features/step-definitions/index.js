//Complete siguiendo las instrucciones del taller
var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');

Given('I go to todoist login screen', () => {
  browser.url('/Users/showLogin/');
});

When('I login' , () => {
  const btnIngresar = $('button');
  btnIngresar.waitForExist(5000);
  var mailInput = $('input[name="email"]');
  mailInput.click();
  mailInput.setValue('daya40@test.com');

  var passwordInput = $('input[name="password"]');
  passwordInput.click();
  passwordInput.setValue('pruebas1234');
  $('button[class="submit_btn ist_button ist_button_red sel_login"]').click();
});

When('I click Añadir tarea', () =>{
  const aTarea = $('a[class="action"]');
  aTarea.waitForExist(10000);
  aTarea.waitUntil(()=> aTarea.isClickable());
  aTarea.click();
});

When('I click Editar tarea', () =>{
  const aTask = $('div[class="text_cursor content task_content_item"');
  aTask.waitForExist(5000);
  aTask.waitUntil(()=> aTask.isClickable());
  aTask.click();
});

When(/^I fill the task with (.*)$/ , (task) => {
  var cajaTask=$('div[class="DraftEditor-editorContainer"]');
  cajaTask.keys(task);
});

When('I click in the button Añadir tarea',()=>{
  const bTarea = $('button[type="submit"]')
  bTarea.click()
})

When('I click complete',()=>{
  const aCheck = $('div[class="ist_checkbox"]');
  aCheck.waitForExist(5000);
  aCheck.waitUntil(()=> aCheck.isClickable());
  aCheck.click();
})

Then('I expect to see Terminaste',() => {
  browser.$('Terminaste').isDisplayed();
 });

Then('I expect to see Inbox',() => {
  browser.$('Inbox').isDisplayed();
 });

Then('I expect to see cucumberCUCUMBER',() => {
browser.$('cucumberCUCUMBER').isDisplayed();
});


