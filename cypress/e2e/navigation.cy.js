describe('Navigation', () => {
  it('navigation main page', () => {
    cy.visit('https://datoj23-the-cutest.herokuapp.com')
    cy.get('h1').should('be.visible')
//    cy.get('h1').should('have.value','Vyberte období akce')
  })
   it('navigation prihlaseni', () => {
      cy.visit('https://datoj23-the-cutest.herokuapp.com')
      cy.get('.nav > .nav-item').click()
      cy.get('.mb-0 > .col-md-8 > .btn').click()
      cy.get('h1').should('be.visible')
    })

})
//