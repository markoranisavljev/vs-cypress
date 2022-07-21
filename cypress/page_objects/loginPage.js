/// <reference types="Cypress" /> 

class LoginPage {


    get emailInput() {
        return cy.get('#marko.ranisavljev91@gmail.com');
    }

    get passwordInput() {
        return cy.get('#miholjdan')
    }

    get loginButton() {
        return cy.get('button');
    }

    login(email, password) {
        this.emailInput.type('marko.ranisavljev91@gmail.com')
        this.passwordInput.type('miholjdan')
        this.loginButton.click()
    }

}

export const loginPage = new LoginPage();