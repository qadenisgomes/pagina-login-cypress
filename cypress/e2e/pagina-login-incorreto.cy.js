describe('Página de Login Incorreto', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  // Dado que estou na página de login
  // Quando insiro credenciais inválidas
  // E clico no botão login
  // Then devo ver uma mensagem de erro
  it('Não deve permitir login com credenciais inválidas', () => {
    cy.get('input[name="username"]').type('usuarioInvalido');
    cy.get('input[name="password"]').type('senhaInvalida');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
  });

  // Dado que estou na página de login
  // Quando insiro um usuário correto e uma senha errada
  // E clico no botão login
  // Então devo ver uma mensagem de erro
  it('Não deve permitir login com usuário correto e senha errada', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('senhaInvalida');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
  });

  // Dado que estou na página de login
  // Quando insiro um usuário errado e uma senha correta
  // E clico no botão login
  // Então devo ver uma mensagem de erro
  it('Não deve permitir login com usuário errado e senha correta', () => {
    cy.get('input[name="username"]').type('usuarioInvalido');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
  });

  // Dado que estou na página de login
  // Quando não preencho nenhum campo
  // E clico no botão login
  // Então devo ver uma mensagem de erro
  it('Não deve permitir login com campos vazios', () => {
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-input-field-error-message').should('be.visible');
  });

  // Dado que estou na página de login
  // Quando deixo o usuário em branco e insiro uma senha correta
  // E clico no botão login
  // Então devo ver uma mensagem de erro
  it('Não deve permitir login com usuário em branco e senha correta', () => {
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-input-field-error-message').should('be.visible');
  });

  // Dado que estou na página de login
  // Quando insiro um usuário correto e deixo a senha em branco
  // E clico no botão login
  // Então devo ver uma mensagem de erro
  it('Não deve permitir login com usuário correto e senha em branco', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-input-field-error-message').should('be.visible');
  });
});
