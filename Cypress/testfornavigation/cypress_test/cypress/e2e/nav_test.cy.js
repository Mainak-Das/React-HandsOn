describe('Bike Paradise Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('https://webapps.tekstac.com/BikeParadise/Rental.html');
    cy.get('body').should('be.visible');
  });

  it('should navigate to Bikes page', () => {
    cy.locateMenuBikes();
    cy.url().should('include', 'Bikes.html');
  });

  it('should navigate to Buy page', () => {
    cy.locateMenuBuy();
    cy.url().should('include', 'Buy.html');
  });

  it('should navigate to Rental page', () => {
    cy.locateMenuRental();
    cy.url().should('include', 'Rental.html');
  });

  it('should navigate to Sell page', () => {
    cy.locateMenuSell();
    cy.url().should('include', 'Sell.html');
  });

  it('should navigate to Accessories page', () => {
    cy.locateMenuAccessories();
    cy.url().should('include', 'Accessories.html');
  });

  it('should navigate to Contact Us page', () => {
    cy.locateMenuContactUs();
    cy.url().should('include', 'ContactUs.html');
  });
});