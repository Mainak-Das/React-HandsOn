import {
  fetchDatafromJson,
  clickSubmit,
  getResult
} from '../support/accountUtils';

describe('Cypress Test - COSMO Bank Account Form', () => {
  beforeEach(() => {
    cy.visit('https://webapps.tekstac.com/COSMOBank/Cosmo.html');
  });

  it('Should fill form using JSON test data and verify the result', () => {
    fetchDatafromJson().then(() => {
      clickSubmit();
      getResult().should('contain.text', 'Account Registration Completed Successfully');
    });
  });
});