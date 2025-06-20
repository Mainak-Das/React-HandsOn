describe('TodoList Application', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Should handle login redirection and invalid inputs', () => {
        // Try login without filling anything
        cy.get('button[type="submit"]').click();
        cy.contains('Please enter username and password').should('exist');

        // Enter invalid credentials
        cy.get('input[name="username"]').type('wrongUser');
        cy.get('input[name="password"]').type('wrongPass');
        cy.get('button[type="submit"]').click();
        cy.contains('Invalid username or password').should('exist');
    });

    it('Should check for valid login credential', () => {
        cy.get('input[name="username"]').type('admin');
        cy.get('input[name="password"]').type('admin');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/todolist');
    });

    it('Should redirect to todolist and check the static content', () => {
        // Perform login
        cy.get('input[name="username"]').type('admin');
        cy.get('input[name="password"]').type('admin');
        cy.get('button[type="submit"]').click();

        cy.contains('Todo List').should('exist');
        cy.get('input[placeholder="Enter a task"]').should('exist');
        cy.get('button').contains('Add').should('exist');
    });

    it('Should check for empty task addition', () => {
        // Perform login
        cy.get('input[name="username"]').type('admin');
        cy.get('input[name="password"]').type('admin');
        cy.get('button[type="submit"]').click();

        // Try adding empty task
        cy.get('button').contains('Add').click();
        cy.contains('Task cannot be empty').should('exist');
    });

    it('Should check for multiple task additions', () => {
        // Login
        cy.get('input[name="username"]').type('admin');
        cy.get('input[name="password"]').type('admin');
        cy.get('button[type="submit"]').click();

        // Add multiple tasks
        const tasks = ['Buy groceries', 'Clean room', 'Read book'];
        tasks.forEach(task => {
            cy.get('input[placeholder="Enter a task"]').type(task);
            cy.get('button').contains('Add').click();
        });

        // Verify tasks are added
        tasks.forEach(task => {
            cy.contains(task).should('exist');
        });
    });

    it('Should check for deletion of tasks', () => {
        // Login
        cy.get('input[name="username"]').type('admin');
        cy.get('input[name="password"]').type('admin');
        cy.get('button[type="submit"]').click();

        // Add a task
        cy.get('input[placeholder="Enter a task"]').type('Delete this task');
        cy.get('button').contains('Add').click();

        // Delete the task
        cy.contains('Delete this task').parent().find('button').click();

        // Confirm deletion
        cy.contains('Delete this task').should('not.exist');
    });

});