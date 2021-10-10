
describe('it should login', () => {
    before(() => {
        cy.login(Cypress.env('email'), Cypress.env('password'))
    });

    // beforeEach(() => {
    //     Cypress.Cookies.preserveOnce('bscookie', 'spectroscopyId', 'JSESSIONID', 'visit', 'UID', 'DSID', 'aam_uuid');
    // })

    it('login',() => {
        cy.get('.search-global-typeahead').type('QA Manager').type('{enter}');
        cy.get("[aria-label='People']").click();
        cy.get("[aria-label='Locations filter. Clicking this button displays all Locations filter options.']").contains('Locations').click();
        cy.get('#geoUrn-103644278').click({force:true});
        cy.get('#geoUrn-102095887').click({force:true});
        cy.get('#geoUrn-90000084').click({force:true});
        cy.get('.artdeco-button__text').contains('Show results').click({force:true});
            cy.get('.reusable-search__entity-results-list').find('artdeco-button__text').contains('Connect').click()
    })

})