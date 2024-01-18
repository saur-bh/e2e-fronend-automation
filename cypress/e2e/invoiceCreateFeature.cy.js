import {Login} from './pages/login';

describe('Create Invoice Feature', function() {
	
	const login = new Login();

	beforeEach(function() {
		login.navigateToUrl('/app');
		//cy.closeCookies();

	});
	
	it(`Should able to create new invoice with existing client`, function() {
		//Enter the Company name
		
			login.email('saurabh.verma@aifinyo.de');
			login.password('Welcome@8');
			login.clickloginBtn();

	})
	
	
});