describe("Drag and drop test", () => {

    it('Verifies can drag and drop an item, and confirm it', () => {
        cy.visit('http://the-internet.herokuapp.com/drag_and_drop');
        //verify starting order is as expected
        cy.get('#column-a > header').should('contain', 'A');
        cy.get('#column-b > header').should('contain', 'B');
        //drag A onto B
        const dataTransfer = new DataTransfer; 
        cy.get('#column-a').trigger('dragstart', { dataTransfer });
        cy.get('#column-b').trigger('drop', { dataTransfer, force: true });
        //verify order is switched
        cy.get('#column-a > header').should('contain', 'B');
        cy.get('#column-b > header').should('contain', 'A');

    })

})