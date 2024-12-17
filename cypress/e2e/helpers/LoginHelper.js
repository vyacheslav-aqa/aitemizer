import LoginPage from '../pages/LoginPage';

class LoginHelper {
    loginToAiTemaizer(userName, password) {
        LoginPage.loginPageTitle.should('be.visible');
        LoginPage.userNameInput.type(userName);
        LoginPage.passwordInput.type(password);
        LoginPage.loginButton.click();
    }
}

export default new LoginHelper();