describe('Coins screen', () => {
  it('should number of coins be 25 in first page', () => {
    // ARRANGE

    // ACT
    cy.intercept('/').as('coins')
    cy.visit('/')
    cy.wait('@coins')

    // ASSERT
    const elements = cy.get('table tbody').children();
    elements.should('have.length', 25);

  })

  it('should filter the number of coins be 1 in first page', () => {
    // ARRANGE

    // ACT
    cy.intercept('/').as('coins')
    cy.visit('/')
    cy.wait('@coins')
    cy.findByRole('textbox').type("Golem");

    // ASSERT
    const elements = cy.get('table tbody').children();
    elements.should('have.length', 1);

  });
});

