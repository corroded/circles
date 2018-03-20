'use strict'

const { beforeBeforeIndex, beforeIndex } = require('../extractors/beforeIndexTuple')
// const beforeIndex = require('./beforeIndex' );
// const beforeBeforeIndex = require( './beforeBeforeIndex' );

module.exports = () => {
  console.log('freakshow', beforeBeforeIndex(), beforeIndex())
}
