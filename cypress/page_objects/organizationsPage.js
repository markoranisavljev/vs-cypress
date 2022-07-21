class OrganizationsPage {

    get organizationCard() {
        return cy.get('.vs-c-my-organization__content');
    }

    get orgModal() {
        return cy.get('.vs-c-modal');
    }

    get organizationNameInput() {
        return this.orgModal.find('input');
    }

    get nextBtn() {
        return cy.get('button[name="next_btn"]')
    }

    get actionBtn() {
        return this.addOrgModal.find('button').last();
    }

    get organizationBtn() {
        return cy.get('.vs-c-list__btn')
    }

    get sidebarBtn() {
        return cy.get('a[class="vs-c-site-logo"]')
    }

    get okBtn() {
        return this.orgModal.find('button').last()
    }

    get archiveBtn() {
        return cy.get('button').eq(-2);
    }

    get yesBtn() {
        return cy.get('button[name="save-btn"]')
    }

    get archiveMsg() {
        cy.get('p')
    }

    createOrganization(name) {
        this.organizationCard.last().click();
        this.orgModal.should('be.visible');
        this.actionBtn.should('be.disabled')
        this.organizationNameInput.type(name)
        this.nextBtn.click()
        this.actionBtn.click()
    }
}

export const organizationsPage = new OrganizationsPage();