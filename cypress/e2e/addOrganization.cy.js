/// <reference types="Cypress" />

import { loginPage } from '../page_objects/loginPage';


describe('create organization test', () => {
  const validEmail = 'marko.ranisavljev91@gmail.com';
  const validPassword = 'miholjdan';

  it('add organization', () => {
    cy.visit('https://cypress.vivifyscrum-stage.com/');
    cy.url().should('include', '/login');
    cy.get("[type='email']").type(validEmail);
    cy.get("[type='password']").type(validPassword)
    cy.get('button').eq(0).click();
    cy.url().should('not.include', 'login');
    cy.get('div.vs-c-my-organization--add-new').click();
    cy.get('input').type('Nova organizacija');
    cy.get ('button[name="next_btn"]').click()
  })

})














