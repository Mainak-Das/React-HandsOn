// support/petUtils.js

export const getPetName = () => {
  // Locate and return the pet name input element
  return cy.get('#petName');
};

export const setPetName = (name) => {
  // Set the value of pet name input
  cy.get('#petName').clear().type(name);
};

export const selectPetType = () => {
  // Select the 'Dog' radio button
  cy.get('input[name="petType"][value="Dog"]').check();
};

export const getOwner = () => {
  // Locate and return the owner input element
  return cy.get('#ownerDetails');
};

export const setOwner = (name) => {
  // Set the value of owner input
  cy.get('#ownerDetails').clear().type(name);
};

export const getRegisterButton = () => {
  // Locate and return the Register button element
  return cy.get('input[type="submit"][value="Register Pet"]');
};
