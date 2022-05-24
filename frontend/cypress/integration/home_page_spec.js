describe('The Home Page', () => {
    it('fetches Todo items - GET', () => {
        cy.request('http://localhost:1323/products').as('products');
        cy.get('@products').then(products => {
            expect(products.status).to.eq(200);
            assert.isArray(products.body, 'Todos Response is an array')
        });
    });
  })

