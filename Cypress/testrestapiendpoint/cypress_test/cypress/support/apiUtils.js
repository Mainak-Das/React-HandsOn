// /support/apiUtils.js

export function fetchApi() {
    return cy.request('GET', 'http://webapps.tekstac.com:8091/getInfo');
}

export function getResponseStatus() {
    return fetchApi().then((response) => {
        return response.status;
    });
}

export function getResponseBody() {
    return fetchApi().then((response) => {
        return response.body;
    });
}