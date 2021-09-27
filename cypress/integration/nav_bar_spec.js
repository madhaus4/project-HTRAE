describe('Nav Bar', () => {
  beforeEach (() => {
    cy.visit('http://localhost:3000')
  })

  it('Should have a button for the Home page', () => {
    cy.get('nav')
      .get('.btn-container')
      .contains('Home')
      .click()
      .url()
      .should('include', '/')
      .should('not.include', '}[)))({;&')
  })

  it('Should have a button for the CO2 page', () => {
    cy.get('nav')
      .get('.btn-container')
      .contains('CO2')
      .click()
      .url()
      .should('include', '/Carbon-Dioxide-Levels')
      .should('not.include', '}[)))({;&')
  })

  it('Should have a button for the Surface Temp page', () => {
    cy.get('nav')
      .get('.btn-container')
      .contains('Surface Temp')
      .click()
      .url()
      .should('include', '/Temperature')
      .should('not.include', '}[)))({;&')
  })

  it('Should have a button for the Glacial Melt page', () => {
    cy.get('nav')
      .get('.btn-container')
      .contains('Glacial Melt')
      .click()
      .url()
      .should('include', '/Arctic-Ice-Melt')
      .should('not.include', '}[)))({;&')
  })

  it('Should have a button for the Sustainable Tips page', () => {
    cy.get('nav')
      .get('.btn-container')
      .contains('Sustainable Tips')
      .click()
      .url()
      .should('include', '/Sustainable-Life-Tips')
      .should('not.include', '}[)))({;&')
  })

  it('Should have a button for the This Planet page', () => {
    cy.get('nav')
      .get('.btn-container')
      .contains('This Planet')
      .click()
      .url()
      .should('include', '/Reminder')
      .should('not.include', '}[)))({;&')
  })

  it('Should display the logo by default', () => {
    cy.get('nav')
      .get('.logo-in-nav')
      .should('have.attr', 'alt')
  })

  it('Should not have an h1 tag', () => {
    cy.get('nav')
      .should('not.have', 'h1')
  })

  it('Should not contain random words', () => {
    cy.get('nav')
      .should('not.contain', '???')
      .should('not.contain', 'meat')
      .should('not.contain', 'lol')
      .should('not.contain', 'shenanigans')
      .should('not.contain', 'YOLO')
      .should('not.contain', ':)')
      .should('not.contain', 'cats')
  })
})