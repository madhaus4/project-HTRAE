describe('Home Page', () => {
  beforeEach (() => {
    cy.visit('http://localhost:3000/Sustainable-Life-Tips')
  })

  it('Should have a default text header', () => {
    cy.get('.tips-page-intro')
      .get('h2')
      .should('include.text', 'It\'s time for action!')
    cy.get('.tips-page-intro')
      .get('p')
      .should('include.text', 'helpful sustainable tips')
  })

  it('Should have 2 main buttons', () => {
    cy.get('.tips-page-container')
      .get('.tips-btn-container')
      .get('.tip-btn').first()
      .contains('Another Tip').click()
      .contains('Another Tip').click()
      .contains('Another Tip').click()
    cy.get('.tips-page-container')
      .get('.tips-btn-container')
      .get('.tip-btn').last()
      .contains('View saved tips').click()
      .contains('View more tips').click()
  })

  it('Should display a sustainable tip', () => {
    cy.get('.tip-container')
      .get('div')
      .get('img[alt="bookmark icon for when item is not saved, black border with no fill"]')
    cy.get('.tip-container')
      .get('div')
      .find('img').click({ multiple: true })
  })

  it('Should be able to click view saved tips button to display saved tips', () => {
    //these first six commands are to add some tips into the saved tips to view
    cy.get('.tip-container>div>img').click({ multiple: true })
    cy.get('.tips-page-container>.tips-btn-container>.tip-btn')
      .contains('Another Tip').click()
    cy.get('.tip-container>div>img').click({ multiple: true })
    cy.get('.tips-page-container>.tips-btn-container>.tip-btn')
      .contains('Another Tip').click()
    cy.get('.tip-container>div>img').click({ multiple: true })
    cy.get('.tips-page-container>.tips-btn-container>.tip-btn')
      .contains('Another Tip').click()


    cy.get('.tips-page-container')
      .get('.tips-btn-container')
      .get('.tip-btn').last()
      .contains('View saved tips').click()
  })

  it('Should be able to click on the bookmark next to a tip in the saved view to delete it', () => {
    //these first seven commands are to add some tips into the saved tips to view
    cy.get('.tip-container>div>img').click({ multiple: true })
    cy.get('.tips-page-container>.tips-btn-container>.tip-btn')
      .contains('Another Tip').click()
    cy.get('.tip-container>div>img').click({ multiple: true })
    cy.get('.tips-page-container>.tips-btn-container>.tip-btn')
      .contains('Another Tip').click()
    cy.get('.tip-container>div>img').click({ multiple: true })
    cy.get('.tips-page-container>.tips-btn-container>.tip-btn')
      .contains('Another Tip').click()
    cy.get('.tips-page-container>.tips-btn-container>.tip-btn')
      .contains('View saved tips').click()

    cy.get('article')
      .get('.saved-tips')
      .get('img').last()
      .click()
  })
})