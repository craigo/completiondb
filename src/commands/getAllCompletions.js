'use strict'

var repository = require('../repository/completionRepository')

var getAllCompletions = function(func){
  repository.all(func)
}

module.exports = getAllCompletions
