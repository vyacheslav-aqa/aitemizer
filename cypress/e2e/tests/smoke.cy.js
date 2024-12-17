import mainPageData from '../../fixtures/mainPageData.json';
import LoginHelper from '../helpers/LoginHelper';
import MainPage from '../pages/MainPage';

describe('Smoke spec', () => {
    beforeEach('Login to AITemizer', () => {
        cy.visit('/');
        LoginHelper.loginToAiTemaizer(Cypress.env('userName'), Cypress.env('password'));
    });

    it('Check the main page after login', () => {
        cy.url().should('include', mainPageData.mainPageNode);
        MainPage.promptFilesSectionTitle.should('have.text', mainPageData.promptFilesLabel);
        MainPage.claudeInputSectionTitle.should('have.text', mainPageData.claudeInputLabel);
        MainPage.claudeOutputSectionTitle.should('have.text', mainPageData.claudeOutputLabel);
    });

    it('Check the claude interraction. Numric answer.', () => {
        MainPage.userInput.type(mainPageData.claude.additionNumber.input);
        MainPage.sendToClaudeButton.click();
        MainPage.responseContent.should('contain.text', mainPageData.claude.additionNumber.output);
    });

    it('Check the claude interraction. Text answer.', () => {
        MainPage.userInput.type(mainPageData.claude.additionText.input);
        MainPage.sendToClaudeButton.click();
        MainPage.responseContent.should('contain.text', mainPageData.claude.additionText.output);
    });
});