describe('Home Page', () => {
  beforeEach (() => {
    cy.visit('http://localhost:3000/Arctic-Ice-Melt')
  })

  it('Should display text content by default', () => {
    cy.get('.polar-page-container')
      .get('h2')
      .should('include.text', 'As the global temperature rises, Earth\'s glacier melt. ')
    cy.get('.polar-page-container')
      .get('p')
      .should('include.text', 'From 2010 to present we are losing 12.85% ')
  })

  it('Should display a graph', () => {
    cy.get('.polar-page-container')
      .get('.polar-data-graph')
      
  })


})