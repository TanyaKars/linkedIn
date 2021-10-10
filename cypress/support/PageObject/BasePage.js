export default class BasePage {

    signIn = () => cy.get('.nav__button-secondary');
    userName = () => cy.get('#username');
    password = () => cy.get('#password');
    login = () => cy.get('.btn__primary--large');
    myNetwork = () => cy.get('[data-test-global-nav-link="mynetwork"]');
    connections = () => cy.get('.mn-community-summary__entity-info');


}