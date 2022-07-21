/// <reference types="Cypress" />

/// <reference types="Cypress" //
import { organizationsPage } from '../page_objects/organizationsPage';

describe('create organization test', () => {

  beforeEach('log in', () => {
    cy.loginViaBackend()
    cy.visit('/')
  })
  
  it('create organization', () => {
    let orgName = 'test org'

    cy.intercept({
      method: 'POST',
      url: Cypress.env('API_BASE_URL') + '/organizations'
    }).as('createOrganization')

    cy.url().should('include', '/my-organizations')
    organizationsPage.createOrganization(orgName)
    cy.wait('@createOrganization').then(interception => {
      expect(interception.response.statusCode).eq(201);
      expect(interception.response.statusMessage).eq('Created')
    })

    cy.visit('/')
    cy.url().should('include', '/my-organizations')
    organizationsPage.organizationCard
      .eq(-2)
      .find('h2')
      .should('have.text', orgName)

  })

  it.only('archive organization', () => {
    cy.visit('/')
    cy.url().should('include', '/my-organizations')

    organizationsPage.organizationBtn.eq(2).click()
    organizationsPage.okBtn.click();
    organizationsPage.sidebarBtn.last().click();
    organizationsPage.archiveBtn.click()
    organizationsPage.yesBtn.click()
    cy.contains('Organization is currently archived.')
  })

})














