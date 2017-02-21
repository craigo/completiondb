const repository = require('../repository/completionRepository')

var editCommand = function(toEdit, callback){
  repository.edit(toEdit, callback)
}

module.exports = editCommand
