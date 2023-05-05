import { setupLogin, setupDashboard } from '../support/e2e'

describe('Testing the like functionality', () => {
  beforeEach(setupLogin)

  it('checking the like button behavior', () => {
    // fetching the posts and reposts
    setupDashboard()
    cy.url().should('eq', 'http://localhost:3000/')
    // liking the first post
    cy.likePost(0, ' 2')
  })

  it('checking the unlike button behavior', () => {
    // fetching the posts and reposts
    setupDashboard()
    cy.url().should('eq', 'http://localhost:3000/')
    // undoing the like on the first post
    cy.likePost(0, ' 1')
  })

  it('checking the comment functionality', () => {
    setupDashboard()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.ant-list-item')
      .eq(0)
      .find('.ant-list-item-action li a')
      .eq(2)
      .click()

    cy.get('.ant-modal-body .ant-form-item-control-input-content')
      .find('#addTweet_tweetText')
      .click()
      .type('This is a comment')

    cy.get('.ant-modal-body .ant-form-item-control-input-content')
      .find('.ant-btn.ant-btn-round.ant-btn-primary')
      .click()

    cy.get('.ant-modal-content .ant-modal-close')
      .find('.ant-modal-close-x')
      .click()

    cy.get('.ant-list-item').eq(0).click()
  })
})
