/// <reference types="cypress"/>

describe('US-00: Funcionalidade: Busca de filmes', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('Deve buscar filmes com sucesso', () => {
        cy.get('#search-input').type('Matrix')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'The Matrix')
    });

    it('Deve buscar filmes com sucesso de uma lista', () => {
    cy.fixture('filmes').then((filmes) =>{
        cy.get('#search-input').type(filmes[3].titulo)
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', filmes[3].titulo)
    })
    });

    it.only('Deve buscar filmes da lista inteira com sucesso', () => {
        cy.fixture('filmes').each((filmes) =>{
            cy.get('#search-input').clear().type(filmes.titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes.titulo)
        })  
    });
});