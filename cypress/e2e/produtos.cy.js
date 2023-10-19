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

    it('Deve adicionar produto ao carrinho', () => {
        cy.get(`[class="product-block grid"]`)
            .contains(`Abominable Hoodie`).click()
            cy.get('.button-variable-item-XS').click()
            cy.get('.button-variable-item-Blue').click()
            cy.get('.input-text').clear().type(2)
            cy.get('.single_add_to_cart_button').click()
            cy.get('.woocommerce-message').should(`contain`, `adicionados no seu carrinho.`)

    });
it('Deve adicionar produto ao carrinho2', () => {
    cy.get(':nth-child(2) > .page-numbers').click()
    cy.get(`[class="product-block grid"]`)
    .contains('Atomic Endurance Running Tee (Crew-Neck)').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Black').click()
    cy.get('.input-text').clear().type(2)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should(`contain`, `adicionados no seu carrinho.`)
});
    it('Deve adicionar produto ao carrinho usando comando customizado', () => {
        cy.AddProdutos(`Abominable Hoodie`,`XL`, `Blue`, 2)
    });

    it.only('Deve adicionar produto ao carrinho usando comando customizado', () => {
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.AddProdutos(`Atomic Endurance Running Tee (Crew-Neck)`,`M`, `Black`, 2)
    });
});