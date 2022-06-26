describe('Test Product', () => {
    it('Get Product - GET', () => {
        cy.request('http://localhost:1323/products').as('products');
        cy.get('@products').then(products => {
            expect(products.status).to.eq(200);
            assert.isArray(products.body, 'Product Response is an array')
        });
    });
  })

