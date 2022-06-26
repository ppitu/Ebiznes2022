context('My Test1', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/')
	})

	describe('Front test', () => {
		it('Test1', () => {
			cy.get('[id=root]')
		})

		it('Test2', () => {
			cy.get('[class=App]')
        })

        it('Test3', () => {
			cy.get('[class=container]')
		})

        it('Test4', () => {
			cy.get('[class^=navbar ]')
		})

        it('Test5', () => {
			cy.get('[class^=navbar ]').within(() => {
                cy.get('h1')
            })
		})

        it('Test6', () => {
			cy.get('[class^=form-inline ]')
                .find('a')
                .should('have.attr', 'href')
		})

        it('Test6', () => {
			cy.get('[class^=form-inline ]')
                .find('a')
                .should('have.attr', 'href')
		})

        it('Test6', () => {
			cy.get('[class^=form-inline ]')
                .find('a')
                .should('have.attr', 'href')
		})

        it('Test6', () => {
			cy.get('[class^=form-inline ]')
                .find('a')
                .should('have.attr', 'href')
		})

        it('Test6', () => {
			cy.get('[class^=form-inline ]')
                .find('a')
                .should('have.attr', 'href')
		})

        it('Test6', () => {
			cy.get('[class^=form-inline ]')
                .find('a')
                .should('have.attr', 'href')
		})

        it('Test6', () => {
			cy.get('[class^=form-inline ]')
                .find('a')
                .should('have.attr', 'href')
		})

        it('Test6', () => {
			cy.get('[class^=form-inline ]')
                .find('a')
                .should('have.attr', 'href')
		})

        it('Test6', () => {
			cy.get('[class^=form-inline ]')
                .find('a')
                .should('have.attr', 'href')
		})

        it('Test6', () => {
			cy.get('[class^=form-inline ]')
                .find('a')
                .should('have.attr', 'href')
		})
        

    })

})