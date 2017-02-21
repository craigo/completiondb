'use strict'
const repository =  require('../repository/completionRepository')

var command = function(id, callBack){
  repository.delete(id, callBack)
}

module.exports = command
