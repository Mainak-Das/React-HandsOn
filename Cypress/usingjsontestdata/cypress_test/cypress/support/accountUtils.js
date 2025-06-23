export let account = null;

export function fetchDatafromJson() {
  return cy.fixture('accountData.json').then((data) => {
    account = data.account;
  });
}

export function setFname() {
  cy.get('#fname').clear().type(account.fname);
}

export function setDob() {
  cy.get('#dob').clear().type(account.dob);
}

export function setGender() {
  cy.get('input[name="gender"]').check(account.gender, { force: true });
}

export function setMobileNumber() {
  cy.get('#mblno').clear().type(account.mblno);
}

export function setEmailId() {
  cy.get('#emailid').clear().type(account.emailid);
}

export function setAddress() {
  cy.get('#cntaddress').clear().type(account.cntaddress);
}

export const selectServicesRequired = () => {
  account.services.forEach((service) => {
    // Map to checkbox IDs (lowercase for matching)
    const idMap = {
      "NetBanking": "#netbanking",
      "Mobile Banking": "#mobile",
      "SMS": "#sms"
    };
    cy.get(idMap[service]).check({ force: true });
  });
};

export const setAddressProof = () => {
  cy.get('#addr').select(account.addrProof);
};

export const setIdProof = () => {
  cy.get('#idproof').select(account.idProof);
};

export const getResult = () => {
  return cy.get('#result');
};

export const clickSubmit = () => {
  setFname();
  setDob();
  setGender();
  setMobileNumber();
  setEmailId();
  setAddress();
  selectServicesRequired();
  setAddressProof();
  setIdProof();
  cy.get('input[type="submit"]').click();
};