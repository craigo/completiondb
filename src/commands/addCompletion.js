'use strict'

var repository = require('../repository/completionRepository')

var addCompletion = function(toAdd, func){
  repository.add(toAdd, func)
}

module.exports = addCompletion
