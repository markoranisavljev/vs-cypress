/// <reference types="Cypress" />

import { loginPage } from '../page_objects/loginPage';


describe('login test', () => {
  const validEmail = 'marko.ranisavljev91@gmail.com';
  const validPassword = 'miholjdan';

  it('login with valid credentials', () => {
    cy.visit('https://cypress.vivifyscrum-stage.com/');
    cy.get("[type='email']").type(validEmail);
    cy.get("[type='password']").type(validPassword)
    cy.get('button').eq(0).click();
  })

})









