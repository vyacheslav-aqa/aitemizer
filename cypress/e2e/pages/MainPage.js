class MainPage {
    get promptFilesSectionTitle() {
        return cy.contains('h2', 'Prompt files:');
    }

    get claudeInputSectionTitle() {
        return cy.contains('h2', 'Claude Input:');
    }

    get claudeInputDescription() {
        return cy.contains('p', 'You can use Claude Input or use AWS Claude link');
    }

    get claudeOutputSectionTitle() {
        return cy.contains('h2', 'Claude Output:');
    }

    get logo() {
        return cy.get('#logo');
    }

    get promptFilesButton() {
        return cy.get('button[onclick="showDropdown()"]');
    }

    get promptFilesDropdown() {
        return cy.get('#fileDropdown');
    }

    get promptFilesSelect() {
        return cy.get('#promptFiles');
    }

    get fileContent() {
        return cy.get('#fileContent');
    }

    get dataExamplesButton() {
        return cy.get('#dataExamplesButton');
    }

    get dataExamplesDropdown() {
        return cy.get('#dataExamplesDropdown');
    }

    get dataExamplesSelect() {
        return cy.get('#dataExamplesSelect');
    }

    get copyButton() {
        return cy.get('#copyButton');
    }

    get userInput() {
        return cy.get('#userInput');
    }

    get sendToClaudeButton() {
        return cy.get('button[onclick="sendBedrockRequest()"]');
    }

    get responseContent() {
        return cy.get('#responseContent');
    }

    get errorContent() {
        return cy.get('#errorContent');
    }

    get awsClaudeLink() {
        return cy.get('a[href*="aws.amazon.com/bedrock"]');
    }
}

export default new MainPage();