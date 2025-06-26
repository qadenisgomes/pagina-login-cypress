describe('Página de Login Correto', () => {
    beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    // Dado que estou na página de login
    // Quando insiro credenciais válidas
    // E clico no botão login
    // Então devo acessar o dashboard
      it('Deve permitir login com credenciais válidas', () => {
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
      });
});