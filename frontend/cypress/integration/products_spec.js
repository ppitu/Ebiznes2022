describe('Test product API', () => {
    let id = -1;

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
        }).then(response => {
            id = response.body.ID
        });
       
    });

    it('Get product', () => {
        cy.request('http://localhost:1323/products/'+id).as('products');
        cy.get('@products').then(products => {
            expect(products.status).to.eq(200);
        });
    });

    it('Update product', () => {
        cy.request('PUT', 'http://localhost:1323/products/'+id, {
            name: 'Test1'
        });
    });

    it('Delete product', () => {
        cy.request('DELETE',  'http://localhost:1323/products/'+id)
    })
})