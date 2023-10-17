/// <reference types="cypress"/>
const perfil = require(`../fixtures/perfil.json`)

context('Funcionalidade Login', () => {
    beforeEach(() => {

        cy.visit(`my-account/`)
    });

    it(`Deve fazer login com sucesso`, () => {
        cy.get('#username').type(`aluno_ebac@teste.com`)
        cy.get('#password').type(`teste@teste.com`)
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should(`contain`, `Logout`)
        
        })

        it('Deve fazer Login com sucesso - usando arquivo de dados', () => {
            cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should(`contain`, `Logout`)
        
        });

        it.only('Deve fazer Login com sucesso usando fixture', () => {
            cy.fixture(`perfil`).then(dados =>{
                cy.get('#username').type(dados.usuario)
                cy.get('#password').type(dados.senha)
                cy.get('.woocommerce-form > .button').click()
                
                cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').should(`contain`, `Logout`)
                  
            })
        });
        
        it(`Deve exibir uma mensagem de erro ao inserir usuarios invalidos`, () =>{
        
        cy.get('#username').type(`aluno_eba@teste.com`)
        cy.get('#password').type(`teste@teste.com`)
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error > li').should(`contain`, `desconhecido`) 
            
        })
        
        it(`Deve exibir uma mensagem de erro ao inserir senhas invalidas`, () =>{
        
            cy.get('#username').type(`aluno_ebac@teste.com`)
            cy.get('#password').type(`teste@teste1.com`)
            cy.get('.woocommerce-form > .button').click()
            
            cy.get('.woocommerce-error > li').should(`contain`, `Perdeu a senha?`)
            
                
            })
});