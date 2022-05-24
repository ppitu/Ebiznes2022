describe('Test product API', () => {
    it('Get products', () => {
        cy.request('http://localhost:1323/products').as('products');
        cy.get('@products').then(products => {
            expect(products.status).to.eq(200);
            assert.isArray(products.body, 'Products Response is an array')
        });
    });

    it('Post product', () => {
        cy.request('POST', 'http://localhost:1323/products', {
            name: 'Test',
            category_id: 1
        });
       
        });
})