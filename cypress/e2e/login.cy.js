describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('logs in with valid credentials', () => {
    cy.fixture('userData').then((data) => {
      cy.get('[data-testid="email-input"]').type(data.validUser.email);
      cy.get('[data-testid="password-input"]').type(data.validUser.password);
      cy.get('[data-testid="submit-btn"]').click();
      cy.get('[data-testid="login-status"]').should('contain', 'Login successful');
    });
  });

  it('shows error with invalid credentials', () => {
    cy.fixture('userData').then((data) => {
      cy.get('[data-testid="email-input"]').type(data.invalidUser.email);
      cy.get('[data-testid="password-input"]').type(data.invalidUser.password);
      cy.get('[data-testid="submit-btn"]').click();
      cy.get('[data-testid="login-status"]').should('contain', 'Invalid credentials');
    });
  });
});
