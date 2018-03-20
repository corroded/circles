'use strict'

const { beforeBeforeIndex, beforeIndex } = require('../extractors')

module.exports = () => {
  console.log('freakshow', beforeBeforeIndex(), beforeIndex())
}
