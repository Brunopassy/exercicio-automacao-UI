/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade pre Cadastro', () => {

    beforeEach(() => {
        cy.visit(`minha-conta`)

    });

    it('Deve Completar o pre cadastro com sucesso', () => {
let emailfaker = faker.internet.email()
let nomefaker = faker.person.firstName(emailfaker)

        cy.get('#reg_email').type(emailfaker)
        cy.get('#reg_password').type(`!@$12345678bru359`)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomefaker)
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should(`contain`, `Detalhes da conta modificados com sucesso.`)
    });
    
    it.only('Deve completar cadastro com sucesso usando comandos customizados', () => {
        let emailfaker2 = faker.internet.email(faker.person)
        cy.preCadastro(emailfaker2, `senha!@fortE`, `Bruno`, `Passy`)
    });
});