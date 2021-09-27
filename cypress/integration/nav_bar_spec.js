describe('Nav Bar', () => {
  beforeEach (() => {
    cy.visit('http://localhost:3000')
  })

  it('Should have a button for each page', () => {
    cy.get('nav')
      .get('.btn-container')
      .contains('Home')
      .click()
      .url()
      .should('include', '/')
  })

  it('Should have a button for each page', () => {
    cy.get('nav')
      .get('.btn-container')
      .contains('CO2')
      .click()
      .url()
      .should('include', '/Carbon-Dioxide-Levels')
  })

  it('Should have a button for each page', () => {
    cy.get('nav')
      .get('.btn-container')
      .contains('Surface Temp')
      .click()
      .url()
      .should('include', '/Temperature')
  })

  it('Should have a button for each page', () => {
    cy.get('nav')
      .get('.btn-container')
      .contains('Glacial Melt')
      .click()
      .url()
      .should('include', '/Arctic-Ice-Melt')
  })

  it('Should have a button for each page', () => {
    cy.get('nav')
      .get('.btn-container')
      .contains('Sustainable Tips')
      .click()
      .url()
      .should('include', '/Sustainable-Life-Tips')
  })

  it('Should have a button for each page', () => {
    cy.get('nav')
      .get('.btn-container')
      .contains('This Planet')
      .click()
      .url()
      .should('include', '/Reminder')
  })

  it('Should display the logo by default', () => {
    cy.get('nav')
      .get('.logo-in-nav')
      .should('have.attr', 'alt')
  })

})