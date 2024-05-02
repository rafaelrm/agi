describe('home', () => {
  it('webapp deve estar online', () => {
    cy.visit('https://blogdoagi.com.br/')

    cy.title().should('eq', 'Blog do Agi | Tudo sobre empréstimo e educação financeira')
    cy.get('body')
    cy.get('#menu-item-3713 > [href="https://blogdoagi.com.br/institucional/"] > .menu-text')
    cy.get('.uagb-post__image-position-top > :nth-child(1) > .uagb-post__cta > .wp-block-button__link')
    
  })
})