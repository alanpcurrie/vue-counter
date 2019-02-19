// https://docs.cypress.io/api/introduction/api.html
// only supports  chrome
// https://github.com/cypress-io/cypress/issues/310

describe('My First e2e Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'unit testing vue with jest')
  })
})
