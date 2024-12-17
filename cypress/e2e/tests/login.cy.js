import LoginPage from '../pages/LoginPage';
import loginData from '../../fixtures/loginData.json';
import mainPageData from '../../fixtures/mainPageData.json';
import LoginHelper from '../helpers/LoginHelper';
import MainPage from '../pages/MainPage';

describe('Check login spec', () => {
    beforeEach('Login to AITemizer', () => {
        cy.visit('/');
    });

    it('Check the login page', () => {
        cy.url().should('include', loginData.loginPageNode);
        LoginPage.loginPageTitle.should('contain.text', loginData.aILabel);
        LoginPage.loginPageTitle.should('contain.text', loginData.temizerLabel);
        LoginPage.userNameInput.should('be.visible');
        LoginPage.passwordInput.should('be.visible');
        LoginPage.loginButton.should('be.visible');
        LoginPage.footerText.should('contain.text', loginData.footerText);

        LoginPage.userNameInput.type(loginData.invalidUser.userName);
        LoginPage.passwordInput.type(loginData.invalidUser.password);
        LoginPage.loginButton.click();
        LoginPage.errorMessage.should('contain.text', loginData.errorMessage);

        LoginPage.userNameInput.type(Cypress.env('userName'));
        LoginPage.passwordInput.type(loginData.invalidUser.password);
        LoginPage.loginButton.click();
        LoginPage.errorMessage.should('contain.text', loginData.errorMessage);

        LoginPage.userNameInput.type(Cypress.env('userName'));
        LoginPage.passwordInput.type(Cypress.env('password'));
        LoginPage.loginButton.click();
        cy.url().should('include', mainPageData.mainPageNode);
        MainPage.promptFilesSectionTitle.should('have.text', mainPageData.promptFilesLabel);
        MainPage.claudeInputSectionTitle.should('have.text', mainPageData.claudeInputLabel);
        MainPage.claudeOutputSectionTitle.should('have.text', mainPageData.claudeOutputLabel);
    });
});