describe("Iframe test", () => {

    it('Verifies can enter text into iframe, and confirm it', () => {

        //Here is one way to do it
        cy.visit('http://the-internet.herokuapp.com/iframe');
        const iframe = cy
            .get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then (cy.wrap);
        iframe.clear().type('First text.');
        iframe.type('{selectall}');
        cy.getByLabelText('Bold').click();
        cy.get('#mceu_28-body').should('contain', 'strong');
        
        //Here is another way to do it
        cy.visit('http://the-internet.herokuapp.com/iframe');
        cy.get('iframe').then( $iframe => {
            const $doc = $iframe.contents();
            cy.wrap( $doc.find('#tinymce') ).clear().type('Second text.');
            cy.wrap( $doc.find('#tinymce') ).type('{selectall}');
            cy.getByLabelText('Bold').click();
            cy.get('#mceu_28-body').should('contain', 'strong');
        })
        
    })
})