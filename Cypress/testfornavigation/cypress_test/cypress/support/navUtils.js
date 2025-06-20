export function locateMenuBikes() {
    cy.contains('a', 'Bikes').click();
}

export function locateMenuBuy() {
    cy.contains('a', 'Buy').click();
}

export function locateMenuRental() {
    cy.contains('a', 'Rental').click();
}

export function locateMenuSell() {
    cy.contains('a', 'Sell').click();
}

export function locateMenuAccessories() {
    cy.contains('a', 'Accessories').click();
}

export function locateMenuContactUs() {
    cy.contains('a', 'Contact Us').click();
}
