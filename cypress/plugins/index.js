// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// winston logger
const { createLogger, format, transports } = require('winston')

const { combine, timestamp, label, printf } = format
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}] ${message}`
})

const logger = createLogger({
  format: combine(label({ label: 'test' }), timestamp(), myFormat),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/info.log' }),
    new transports.Console({ level: 'error' }),
  ],
})

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('task', {
    logInfo(msg) {
      return new Promise((resolve, reject) => {
        logger.info(msg)
        resolve('')
      })
    },

    logWarn(msg) {
      return new Promise((resolve, reject) => {
        logger.warn(msg)
        resolve('')
      })
    },

    logError(msg) {
      return new Promise((resolve, reject) => {
        logger.error(msg)
        resolve('')
      })
    },
  })
}

// empty tasks
// module.exports = (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config

//   on('task', {})
// }
