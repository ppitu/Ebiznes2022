describe('Test creadit card card API', () => {
    let id = -1;

    it('Get creadit card', () => {
        cy.request('http://localhost:1323/credit_cards').as('creditcard');
        cy.get('@creditcard').then(creditcard => {
            expect(creditcard.status).to.eq(200);
            assert.isArray(creditcard.body, 'Categories Response is an array')
        });
    });

    it('Post credit card', () => {
        cy.request('POST', 'http://localhost:1323/credit_cards', {
            number: 'Test',
            category_id: 1
        }).then(response => {
            id = response.body.ID
        });
       
    });

    it('Get creadit card', () => {
        cy.request('http://localhost:1323/credit_cards/'+id).as('creditcard');
        cy.get('@creditcard').then(creditcard => {
            expect(creditcard.status).to.eq(200);
        });
    });

    it('Update creadit card', () => {
        cy.request('PUT', 'http://localhost:1323/credit_cards/'+id, {
            number: 'Test1'
        });
    });

    it('Delete creadit card', () => {
        cy.request('DELETE',  'http://localhost:1323/credit_cards/'+id)
    })
})