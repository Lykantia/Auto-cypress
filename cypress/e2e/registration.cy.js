import { random } from 'lodash';
let userName = `e2eTestUser${random(Number.MAX_SAFE_INTEGER)}`;
let email = `email${random(Number.MAX_SAFE_INTEGER)}@email.com`;
let heslo = `Tojejedno1`;
describe('Registration', () => {
   it('basic registration', () => {
      cy.visit('https://datoj23-the-cutest.herokuapp.com')
      cy.get('.nav > .nav-item').click()
      cy.get('.mb-0 > .col-md-8 > .btn').click()
      cy.get('h1').should('be.visible')
      cy.get('#name').type(userName)
      cy.get('#email').type(email)
      cy.get('#password').type(heslo)
      cy.get('#password-confirm').type(heslo)
      cy.get('.btn').click()
    })
   it('basic prihlaseni', () => {
      cy.visit('https://datoj23-the-cutest.herokuapp.com')
      cy.get('.nav > .nav-item').click()
      cy.get('h1').should('be.visible')
      cy.get('#email').type(email)
      cy.get('#password').type(heslo)
      cy.get('.btn-primary').click()
     cy.get('h1').should('be.visible')
      //cy.get('.btn').click()
    })

})