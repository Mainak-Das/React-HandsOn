describe('Homepage Routing', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Start at Homepage
    });
      
    it('navigates to Login page', () => {
      cy.contains('Login').click();
      cy.url().should('include', '/login');
      cy.get('form').should('exist'); // Assumes Login page has a <form>
    });
  
    it('navigates to Todolist page', () => {
      cy.contains('Get Started').click();
      cy.url().should('include', '/todolist');
      cy.contains('What are the upcoming schedule').should('exist'); // Replace with a unique text from Todolist
    });

  });
  