describe('Coins screen', () => {
  beforeEach(() => {
    cy.intercept('GET', 'process.env.REACT_APP_API_COIN', { fixture: 'coins.json' })
  })
  it('should number of coins be 25 in first page', () => {
    // ARRANGE

    // ACT
    cy.visit('/')

    // ASSERT
    const elements = cy.get('table tbody').children();
    elements.should('have.length', 25);

  })

  it('should filter the number of coins be 1 in first page', () => {
    // ARRANGE

    // ACT
    cy.visit('/')
    cy.findByRole('textbox').type("Golem");

    // ASSERT
    const elements = cy.get('table tbody').children();
    elements.should('have.length', 1);

  });
});

