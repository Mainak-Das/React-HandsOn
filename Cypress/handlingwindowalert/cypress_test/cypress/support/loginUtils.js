export const getUserName = () => {
  return cy.get('input[name="username"]');
};

export const setUserName = () => {
  return getUserName().clear().type('admin');
};

export const getPassword = () => {
  return cy.get('input[name="password"]');
};

export const setPassword = () => {
  return getPassword().clear().type('admin#123');
};

export const getResult = () => {
  return cy.get('#result').should('be.visible');
};

export const setCaptcha = () => {
  return getResult().invoke('text').then((captchaText) => {
    // Trim and verify we have content
    const trimmedText = captchaText.trim();
    if (!trimmedText) {
      throw new Error('Captcha text is empty');
    }

    // Check if it's already just the result (like "219")
    if (/^\d+$/.test(trimmedText)) {
      cy.log(`Captcha is already just the result: ${ trimmedText }`);
      return cy.get('input[name="captcha"]').clear().type(trimmedText);
    }

    // Otherwise try to parse as "X + Y = Z" format
    const parts = trimmedText.split(' = ');
    if (parts.length !== 2) {
      throw new Error(`Unexpected captcha format: ${ trimmedText }`);
    }

    const result = parts[1].trim();
    if (!result) {
      throw new Error('Captcha result is empty');
    }

    return cy.get('input[name="captcha"]').clear().type(result);
  });
};
export const clickSubmit = () => {
  setUserName();
  setPassword();
  setCaptcha();
  return cy.get('input[type="submit"]').click();
};

export function captureAlert() {
  return new Cypress.Promise((resolve) => {
    cy.on('window:alert', (alertText) => {
      resolve(alertText);
    });
  });
}