/// <reference types="cypress" />


describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Bruno')
    cy.get('#signup-lastname').type('Marciano')
    cy.get('#signup-email').type('bruno2@gmail.com')
    cy.get('#signup-phone').type('11999999999')
    cy.get('#signup-password').type('Teste&123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})