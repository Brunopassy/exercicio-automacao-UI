/// <reference types="cypress"/>

describe('Pagina de Produtos', () => {

    beforeEach(() => {
        cy.visit(`http://lojaebac.ebaconline.art.br/produtos/`)
    });

    it('Deve selecionar um produto da lista', () => {

        cy.get(`[class="product-block grid"]`)
            //,first()
            //.last()
            //.eq(3)
            .contains(`Aether Gym Pant`)
            .click()

    });

    it.only('Deve adicionar produto ao carrinho', () => {
        cy.get(`[class="product-block grid"]`)
            .contains(`Aether Gym Pant`).click()
            cy.get('.button-variable-item-32').click()
            cy.get('.button-variable-item-Blue').click()
            cy.get('.input-text').clear().type(2)
            cy.get('.single_add_to_cart_button').click()

    });

});