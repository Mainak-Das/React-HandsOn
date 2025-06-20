// pet_test.cy.js

import {
  getPetName,
  setPetName,
  selectPetType,
  getOwner,
  setOwner,
  getRegisterButton
} from '../support/petUtils';

describe('Cypress Test - Pet Registration Form', () => {
  it('should locate elements and interact with the form', () => {
    cy.visit('https://webapps.tekstac.com/PetRegistration/index.html');

    // Assert that pet name input exists and set value
    getPetName().should('exist');
    setPetName('Bruno');

    // Select pet type Dog
    selectPetType();

    // Assert that owner input exists and set value
    getOwner().should('exist');
    setOwner('Henry');

    // Assert that the register button exists and click it
    getRegisterButton().should('exist').click();

    // Verify the output result
    cy.get('#output').should('contain.text', 'Registration Successful!');
    cy.get('#output').should('contain.text', 'Pet Name: Bruno');
    cy.get('#output').should('contain.text', 'Pet Type: Dog');
  });
});
