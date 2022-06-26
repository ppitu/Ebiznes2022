describe('Test Order API', () => {
    let id = -1;

    it('Get orders', () => {
        cy.request('http://localhost:1323/categories').as('categories');
        cy.get('@categories').then(categories => {
            expect(categories.status).to.eq(200);
            assert.isArray(categories.body, 'Categories Response is an array')
        });
    });

    it('Post orders', () => {
        cy.request('POST', 'http://localhost:1323/categories', {
            name: 'Test',
            category_id: 1
        }).then(response => {
            id = response.body.ID
        });
       
    });

    it('Get orders', () => {
        cy.request('http://localhost:1323/categories/'+id).as('categories');
        cy.get('@categories').then(categories => {
            expect(categories.status).to.eq(200);
        });
    });

    it('Update orders', () => {
        cy.request('PUT', 'http://localhost:1323/categories/'+id, {
            name: 'Test1'
        });
    });

    it('Delete product', () => {
        cy.request('DELETE',  'http://localhost:1323/products/'+id)
    })
})