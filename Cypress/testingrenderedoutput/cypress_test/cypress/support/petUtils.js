// support/petUtils.js

export const clickRegisterButton = () => {
  // Set values for pet registration form
  cy.get('#petName').clear().type('Bruno');
  cy.get('input[name="petType"][value="Cat"]').check();
  cy.get('#ownerDetails').clear().type('Henry');
  // Leave vaccination checkbox (#isVaccinated) unchecked
  cy.get('input[type="submit"][value="Register Pet"]').click();
};

export const getOutput = () => {
  // Return the output div with id #output
  return cy.get('#output');
};
