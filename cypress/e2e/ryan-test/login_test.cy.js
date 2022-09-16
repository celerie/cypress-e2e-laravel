describe('Login test', () => {
  it('Visits the login page, enters user\'s , enters home page', () => {
    cy.visit('/login')
    cy.get('#email').type('ryan_test@mailinator.com')
    .should('have.value', 'ryan_test@mailinator.com')
    cy.get('#password').type('12345678')
    cy.get('button').contains('Login').click() 
    cy.url().should('include', '/home')
  })
})