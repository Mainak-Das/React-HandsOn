import {
  getUserName,
  setUserName,
  getPassword,
  setPassword,
  getResult,
  setCaptcha,
  clickSubmit,
  captureAlert
} from '../support/loginUtils';

describe('Smart University Login Page Test', () => {
  beforeEach(() => {
    cy.visit('https://webapps.tekstac.com/SeleniumApp1/SmartUniversity/login.html');
    // Wait for page to load completely
    cy.get('input[name="username"]').should('exist');
  });

  it('should successfully login with valid credentials and verify alert', () => {
    // Verify and set username
    cy.wrap(getUserName())
      .should('be.visible')
      .and('have.attr', 'name', 'username');
    setUserName();

    // Verify and set password - fixed selector
    cy.wrap(getPassword())
      .should('be.visible')
      .and('have.attr', 'name', 'password')
      .and('have.attr', 'type', 'password');
    setPassword();

    // Verify and set captcha - with proper error handling
it('should handle all captcha formats correctly', () => {
  getResult()
    .invoke('text')
    .then((captchaText) => {
      const trimmedText = captchaText.trim();
      cy.log(`Processing captcha: "${trimmedText}`);

      // Case 1: Already just the result (e.g., "219")
      if (/^\d+$/.test(trimmedText)) {
        cy.log('Detected simple numeric captcha');
        const result = trimmedText;
        setCaptcha();
        return cy.get('input[name="captcha"]').should('have.value', result);
      }
      
      // Case 2: "X + Y = Z" format
      if (trimmedText.includes('=')) {
        cy.log('Detected equation format captcha');
        const parts = trimmedText.split(' = ');
        const result = parts[1].trim();
        setCaptcha();
        return cy.get('input[name="captcha"]').should('have.value', result);
      }

      throw new Error(`Unrecognized captcha format: ${trimmedText}`);
    });
});
    
    setCaptcha();
    cy.get('input[name="captcha"]').should('not.have.value', '');

    // Test the alert message
    const alertPromise = captureAlert();
    clickSubmit();
    
    cy.wrap(alertPromise).then((alertText) => {
      expect(alertText).to.equal('Login Successful');
    });
  });

  it('should have all required elements on the page', () => {
    cy.get('input[name="username"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('#result').should('exist');
    cy.get('input[name="captcha"]').should('exist');
    cy.get('input[type="checkbox"][name="remember"]').should('exist');
    cy.get('input[type="submit"]').should('exist');
    cy.contains('Register here').should('exist');
  });
});
