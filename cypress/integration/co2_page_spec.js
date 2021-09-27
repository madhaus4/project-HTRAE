describe('Home Page', () => {
  beforeEach (() => {
    cy.intercept('GET', 'https://global-warming.org/api/co2-api', { fixture: 'carbon_dioxide'}).as('CO2Data')
    cy.visit('http://localhost:3000/Carbon-Dioxide-Levels')
  })

  it('Should display text content by default', () => {
    cy.get('.CO2-page-container')
      .get('h2')
      .should('include.text', 'Carbon dioxide (CO2) is a greenhouse gas')
    cy.get('.CO2-page-container')
      .get('p')
      .should('include.text', '~26 parts per million')
  })

  it('Should display a graph', () => {
    cy.get('.CO2-page-container')
      .get('.CO2-data-graph')
  })

  it('Should not display an image', () => {
    cy.contains('img').should('not.exist')
  })

  it('Should not display a button', () => {
    cy.contains('button').should('not.exist')
  })
})