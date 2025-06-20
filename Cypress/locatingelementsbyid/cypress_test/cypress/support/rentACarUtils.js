export const getName = () => {
    return cy.get('input[placeholder="Enter the name"]')
        .should('exist')
        .first();
};

export const getContactNumber = () => {
   
    return cy.get('input[placeholder*="Contact"], input[placeholder*="Number"], input[type="tel"]')
        .should('exist')
        .first();
};

export const getTravelDate = () => {
  
    return cy.get('input[placeholder*="date"], input[placeholder*="yyyy"], input[type="date"]')
        .should('exist')
        .first();
};

export const getDuration = () => {
   
    return cy.get('input[placeholder*="Duration"], input[placeholder*="hours"], input[type="number"]')
        .should('exist')
        .first();
};