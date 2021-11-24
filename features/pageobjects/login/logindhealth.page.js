

import Page from '../base.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginDhealth extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#loginform-username');
    }

    get inputPassword() {
        return $('#loginform-password');
    }

    get btnSubmit() {
        return $('.login-btn');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('site/login');
    }
}

export default new LoginDhealth();
