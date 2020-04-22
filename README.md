# Cypress cy.task demo (using plugins-file)

## Prerequisites

- Nodejs 8.x [Install Nodejs 8.x or later version using [nvm](https://github.com/creationix/nvm) or [Node.js](https://nodejs.org/en/)]
- Chrome latest version
- [Java 1.8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

## Clone the repository

\> git clone git@github.com:a5g/cypress-cytask-example.git

## Switch to `cypress-cytask-example` folder

\> cd cypress-cytask-example

### Install required node_modules

\> npm install

## Run Tests

\> npx cypress open (select and run tests) <br />
\> npx cypress run<br />

## Test Reports

To view the HTML Test reports <br />
allure: <br />
\> npm run report

junit: <br />
\> open target/test-results/report.xml

mochawesome: <br />
\> open target/mochawesome/report.html

## Logs

To view logs <br />
\> open logs/info.log <br />
\> open logs/error.log

## Demo

link_to_video
