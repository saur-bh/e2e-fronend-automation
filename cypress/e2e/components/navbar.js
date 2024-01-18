/**
 * Class representing NAVBAR component.
 */

export default class Navbar {
/**
 * Function to click on logo of the Pflegia page.
 * @example
 * Navbar.clickOnLogo();
*/

	clickOnLogo() {
		cy.get('#Capa_1').click();
	}

/**
 * Function to click on home of the Pflegia page.
 * @example
 * Navbar.homePage();
*/

clickonHomePage() {
	cy.get('[data-testid="link-home"]').click();
}

/**
 * Function to click on jobBoard of the Pflegia page.
 * @example
 * Navbar.clickonJobBoard();
*/

clickonJobBoard() {
	cy.get('[data-testid="link-jobBoard"]').click();
}

/**
 * Function to click on forEmployer of the Pflegia page.
 * @example
 * Navbar.clickonForEmployer();
*/

clickonForEmployer() {
	cy.get('[data-testid="link-forEmployers"]').click();
}

/**
 * Function to click on blog of the Pflegia page.
 * @example
 * Navbar.clickBlog();
*/

clickBlog() {
	cy.get('[data-testid="link-blog""]').click();
}
	
  
}