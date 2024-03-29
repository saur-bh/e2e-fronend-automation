import { BasePage } from './basePage';
/**
 * Class representing a Registration.
 * @extends BasePage
 */

export class Login extends BasePage {
/**
 * Function to  type in the email field of login page.
 * @property {String} text Text which needs to be entered.
 * @example
 * Login.email('automation@example.com');
*/
email(text){
	cy.get('#emailField').type(text);
};

/**
 * Function to  type in the password field of login page.
 * @property {String} text Text which needs to be entered.
 * @example
 * Login.password('Welcome@8');
*/
password(text){
	cy.get('[type="password"]').type(text);
};


/**
 * Function to click on the login button.
 * @example
 * Login.clickloginBtn();
*/
	clickloginBtn(){
		cy.get('#loginFormButton > span').click();
	};
	
};