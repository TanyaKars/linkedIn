import user from '../fixtures/data'

describe('it should login', () => {
    before(() => {
        cy.login(user.email, user.password)
    });
    it('login',() => {

    })

})