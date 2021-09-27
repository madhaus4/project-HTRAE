describe('Home Page', () => {
  beforeEach (() => {
    cy.visit('http://localhost:3000/Temperature')
  })

  it('Should display text content by default', () => {
    cy.get('.temp-page-container')
      .get('h2')
      .should('include.text', 'A one-degree global change is significant because')
    cy.get('.temp-page-container')
      .get('p')
      .should('include.text', 'The 10 warmest years on record have all occurred')
  })

  it('Should display a graph', () => {
    cy.get('.temp-page-container')
      .get('.temp-data-graph')
      
  })

})