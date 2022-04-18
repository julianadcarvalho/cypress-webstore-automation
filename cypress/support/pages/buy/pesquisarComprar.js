class buy{

    pesquisarAdicionar(){
        cy.get('.sf-menu > :nth-child(3) > a').click();
        cy.wait(2000);

        cy.get('.product_img_link > .replace-2x').click();
        cy.contains('Add to cart');
        cy.get('#group_1').select('M');
        cy.get('.exclusive > span').click();
        cy.contains('Product successfully');
        cy.get('.continue > span').click();
        cy.wait(2000);

        cy.get('.icon-plus').click();
        cy.get('.exclusive > span').click();
        cy.contains('Product successfully');
        cy.get('.continue > span').click();
        cy.contains('Add to cart');
        cy.wait(2000);
    }
}

export default new buy();