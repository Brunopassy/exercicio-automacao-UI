/// <reference types="cypress"/>

describe('Pagina de Produtos', () => {

    beforeEach(() => {
        cy.visit(`produtos/`)
    });

    it('Deve selecionar um produto da lista', () => {

        cy.get(`[class="product-block grid"]`)
            //,first()
            //.last()
            //.eq(3)
            .contains(`Abominable Hoodie`)
            .click()

    });

    it.only('Deve adicionar produto ao carrinho', () => {
        cy.get(`[class="product-block grid"]`)
            .contains(`Abominable Hoodie`).click()
            cy.get('.button-variable-item-XS').click()
            cy.get('.button-variable-item-Blue').click()
            cy.get('.input-text').clear().type(2)
            cy.get('.single_add_to_cart_button').click()
            cy.get('.woocommerce-message').should(`contain`, `adicionados no seu carrinho.`)

    });

});