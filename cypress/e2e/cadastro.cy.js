/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it('Deve fazer os cadastros de campos obrigatórios', () => {
    var email = `clei${Date.now()}@gmail.com`
    cy.preencherCadastro('Clei', 'Silva', email, '85999132108', 'Teste!1234')
    cy.get('#signup-response').should('contain' , 'Failed to fetch')
  })
  it('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('Clei20', 'Silva', 'clei@gmail.com', '85999132108', 'Teste!1234')
    
  });
})