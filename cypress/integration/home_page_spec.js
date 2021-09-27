describe('Home Page', () => {
  beforeEach (() => {
    cy.visit('http://localhost:3000')
  })

  it('Should display intro text content by default', () => {
    cy.get('.home-page-container')
      .get('.home-page-intro')
      .should('include.text', 'Worldwide, the climate crisis is felt.')
      .get('.welcome-statement')
      .should('include.text', 'Welcome to project HTRAE')
      .get('.climate-statement')
      .should('include.text', 'The short is that climate change is ')
  })

  it('Should display resources by default', () => {
    cy.get('.home-page-container')
      .get('.resource-container')
      .should('include.text', 'For more information: ')
      .get('a').last().should('have.text', 'climate.gov')
  })

})