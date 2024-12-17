class LoginPage {
    get loginPageTitle() {
        return cy.get('#logo');
    }

    get userNameInput() {
        return cy.get('input[name="username"]');
    }

    get passwordInput() {
        return cy.get('input[name="password"]');
    }

    get loginButton() {
        return cy.get('button[type="submit"]');
    }
    get footerText() {
        return cy.get('footer');
    }

    get errorMessage() {
        return cy.get('.error-message');
    }
}

export default new LoginPage();