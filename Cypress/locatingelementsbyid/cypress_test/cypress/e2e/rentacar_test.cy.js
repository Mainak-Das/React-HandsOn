import { getName, getContactNumber, getTravelDate, getDuration } from '../support/rentACarUtils';

describe('Rent A Car Application Form Elements', () => {
    beforeEach(() => {
        cy.visit('https://webapps.tekstac.com/RentaCar/');
      
        cy.wait(1000);
    });

    it('should verify the name input field exists', () => {
        getName().should('be.visible');
    });

    it('should verify the contact number input field exists', () => {
        getContactNumber().should('be.visible');
    });

    it('should verify the travel date input field exists', () => {
        getTravelDate().should('be.visible');
    });

    it('should verify the duration input field exists', () => {
        getDuration().should('be.visible');
    });
});
