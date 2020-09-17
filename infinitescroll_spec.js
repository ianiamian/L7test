describe("Iframe test", () => {

    it('Verifies new divs are added as you scroll down page', () => {
        cy.visit('http://the-internet.herokuapp.com/infinite_scroll');
        cy.get('.jscroll-added').eq(0).should('exist');
        cy.scrollTo('bottom');
        cy.wait(100);
        cy.get('.jscroll-added').eq(1).should('exist');
        cy.scrollTo('bottom');
        cy.wait(100);
        cy.get('.jscroll-added').eq(2).should('exist');
        cy.scrollTo('bottom');
        cy.wait(100);
        cy.get('.jscroll-added').eq(3).should('exist');
    })

})