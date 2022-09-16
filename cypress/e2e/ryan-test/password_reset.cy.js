describe('Password reset', () => {
  it('Navigates to the login page and clicks \'Forgot Your Password? \' Checks if the URL is , Enters an invalid email address and attempts to send password reset link', () => {
    cy.visit('/login')
    //cy.get('a').contains('Forgot Your Password?').click()
    cy.contains('Forgot Your Password?').click()
    cy.url().should('include', '/password/reset')
    cy.get('#email').type('nonexistent@example.com')
    cy.contains("Send Password Reset Link").click()
    cy.contains('We can\'t find a user with that email address.')
    cy.get('#email').clear()
    cy.get('#email').type('ryan_test@mailinator.com')
    cy.contains("Send Password Reset Link").click()
    cy.get('.alert').should('have.text', ' We have emailed your password reset link! ')
    
  })
})