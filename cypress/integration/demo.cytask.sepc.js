describe(`Demo test to show Cypress task using plugins`, () => {
  it(`write to log using cy.task`, () => {
    console.log(`writing to a log file`)

    cy.task('logInfo', `cy.task info log added`)
    cy.task('logError', `cy.task error log added`)
  })
})
