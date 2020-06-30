const i18n = require('../../config/i18n')

const linkResolver = doc => {
  const prefix = ''

  return `${prefix}${doc.uid}`
}

module.exports = linkResolver
