describe('Contact Form', () => {
  it('should submit the form successfully', () => {
    cy.visit('http://localhost:5173/'); // Change to the appropriate route for your contact page
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john@example.com');
    cy.get('textarea[name="message"]').type('This is a test message');
    cy.get('form').submit();
    cy.contains('Thanks for your submission!'); // This checks the success message
  });
});
