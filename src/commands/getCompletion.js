'use strict'

const repository = require('../repository/completionRepository')

var getCommand = function(completionId, func){
  repository.get(completionId,func)
}

module.exports = getCommand
