// pet_test.cy.js

import { clickRegisterButton, getOutput } from '../support/petUtils';

describe('Cypress Test - Pet Registration', () => {
  it('should register a pet and display correct output', () => {
    cy.visit('https://webapps.tekstac.com/PetRegistration/index.html');

    clickRegisterButton();

    getOutput().should('contain.text', 'Registration Successful!');
    getOutput().should('contain.text', 'Pet Name: Bruno');
    getOutput().should('contain.text', 'Pet Type: Cat');
    getOutput().should('contain.text', 'Vaccinated: No');
  });
});
