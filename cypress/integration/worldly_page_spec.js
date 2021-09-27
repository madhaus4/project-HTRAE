describe('Home Page', () => {
  beforeEach (() => {
    cy.visit('http://localhost:3000/Reminder')
  })

  it('Should display 12 images by default', () => {
    cy.get('.worldly-container')
      .get('img')
      .should('have.attr', 'alt')
    cy.get('.worldly-container')
      .get('img[src="https://themysteriousworld.com/wp-content/uploads/2013/11/death-valley.webp"]')
    cy.get('.worldly-container')
      .get('img[src="https://scontent.fapa1-1.fna.fbcdn.net/v/t1.6435-9/70625335_105971367463264_8872828162048786432_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=EmiRlZ5-NyEAX8YRXBB&tn=nt1RDwyC8c5SK0U3&_nc_ht=scontent.fapa1-1.fna&oh=da51ba7edcc444e1c205aadcab935829&oe=6178B57B"]')
    cy.get('.worldly-container')
      .get('img[src="https://themysteriousworld.com/wp-content/uploads/2013/11/mount-everest.webp"]')  
  })
})