describe('Autenticação', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it(
    'Deve autenticar, redirecionar para página de usuários e sair',
    { tags: ['@login'] },
    () => {
      cy.getBySel('estado').click();
      cy.contains(Cypress.env('estado')).click();
      cy.getBySel('email').type(Cypress.env('login'));
      cy.getBySel('password').type(Cypress.env('password'));
      cy.getBySel('submit').click();

      cy.location('pathname').should('eq', '/users/list');
      cy.contains('Usuários').should('be.visible');

      cy.contains('Sair', { matchCase: false }).click();
      cy.location('pathname').should('contains', '/auth/login');
    }
  );

  it('Deve notificar formato de entrada inválido nos campos', () => {
    // valida dados obrigatórios
    cy.getBySel('submit').click();
    cy.contains('email is a required field').should('be.visible');
    cy.contains('password is a required field').should('be.visible');

    // valida formato do email
    cy.getBySel('email').type('email.com.br');
    cy.contains('email must be a valid email').should('be.visible');
  });

  it('Deve mostrar mensagem de erro ao entrar com dados inválidos', () => {
    cy.getBySel('email').type('email@email.com.br');
    cy.getBySel('password').type('teste');
    cy.getBySel('submit').click();

    cy.contains('Autenticação inválida').should('be.visible');
  });
});
