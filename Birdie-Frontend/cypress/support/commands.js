// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
  const email = 'ana@gmail.com'
  const password = '123'

  cy.visit('http://localhost:3000/')

  cy.get('#login-user_user_email')
    .click()
    .should('have.attr', 'placeholder', 'Email')
    .type(email)

  cy.get('#login-user_user_password')
    .click()
    .should('have.attr', 'placeholder', 'Password')
    .type(password)

  cy.get('.login-form-button').click()

  return cy
    .intercept({
      method: 'GET',
      url: `http://localhost:8081/api/getLoggedUser/${email}/?pwd=${password}`,
    })
    .as('loggedUser')
})

Cypress.Commands.add('getPostsDashboard', () => {
  cy.intercept({
    method: 'GET',
    url: `http://localhost:8081/api/tweetsForHome/*`,
  }).as('getTweets')
  cy.intercept({
    method: 'GET',
    url: `http://localhost:8081/api/retweets/*`,
  }).as('getRetweets')
})

Cypress.Commands.add('likePost', (postIindex, nrOfLikes) => {
  cy.get('.ant-list-item')
    .eq(postIindex)
    .find('.ant-list-item-action li a')
    .eq(0)
    .click()

  // checking if the like count has been modified
  cy.get('.ant-list-item')
    .eq(postIindex)
    .find('.ant-list-item-action li a')
    .eq(0)
    .should('have.text', nrOfLikes)
})
