import { getResponseStatus, getResponseBody } from '../support/apiUtils';

describe('API Tests for http://webapps.tekstac.com:8091/getInfo', () => {
    it('should verify the API response status code', () => {
        getResponseStatus().then((status) => {
            expect(status).to.equal(200);
        });
    });

    it('should verify the API response body is not empty', () => {
        getResponseBody().then((body) => {
            expect(body).to.not.be.null;
            expect(body).to.not.be.undefined;
        });
    });

    // Add more specific assertions based on your expected response body
    // For example, if you know the response structure:
    it('should verify specific properties in the response body', () => {
        getResponseBody().then((body) => {
            // Example assertions - adjust based on your actual API response
            expect(body).to.have.property('someExpectedProperty');
            expect(body.someExpectedProperty).to.not.be.empty;
        });
    });
});

