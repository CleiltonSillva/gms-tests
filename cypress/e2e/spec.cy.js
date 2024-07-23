/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer os cadastros de campos obrigatórios', () => {

    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Cleilton')
    cy.get('#signup-lastname').type('Sillva')
    cy.get('#signup-email').type('clei@gmail.com')
    cy.get('#signup-password').type('Teste!3030')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Failed to fetch')
  })
})