describe('Página de Login', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  // Dado que estou na página de login
  // Quando insiro credenciais válidas
  // E clico no botão login
  // Então devo acessar o dashboard
  it('Deve permitir login com credenciais válidas', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.url().should('include', '/dashboard');
  });

  // Dado que estou na página de login
  // Quando insiro credenciais inválidas
  // E clico no botão login
  // Then devo ver uma mensagem de erro
  it('Não deve permitir login com credenciais inválidas', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('usuarioInvalido');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('senhaInvalida');
    cy.get('.oxd-button').click();
    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
  });

  // Dado que estou na página de login
  // Quando insiro um usuário correto e uma senha errada
  // E clico no botão login
  // Então devo ver uma mensagem de erro
  it('Não deve permitir login com usuário correto e senha errada', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('senhaInvalida');
    cy.get('.oxd-button').click();
    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
  });

  // Dado que estou na página de login
  // Quando insiro um usuário errado e uma senha correta
  // E clico no botão login
  // Então devo ver uma mensagem de erro
  it('Não deve permitir login com usuário errado e senha correta', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('usuarioInvalido');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
  });

  // Dado que estou na página de login
  // Quando não preencho nenhum campo
  // E clico no botão login
  // Então devo ver uma mensagem de erro
  it('Não deve permitir login com campos vazios', () => {
    cy.get('.oxd-button').click();
    cy.get('.oxd-input-field-error-message').should('be.visible');
  });

  // Dado que estou na página de login
  // Quando deixo o usuário em branco e insiro uma senha correta
  // E clico no botão login
  // Então devo ver uma mensagem de erro
  it('Não deve permitir login com usuário em branco e senha correta', () => {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-input-field-error-message').should('be.visible');
  });

  // Dado que estou na página de login
  // Quando insiro um usuário correto e deixo a senha em branco
  // E clico no botão login
  // Então devo ver uma mensagem de erro
  it('Não deve permitir login com usuário correto e senha em branco', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get('.oxd-button').click();
    cy.get('.oxd-input-field-error-message').should('be.visible');
  });
});
