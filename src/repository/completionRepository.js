'use strict'

const mongo = require('mongodb')
const monk = require('monk')
const db = monk('localhost:27017/completiondb')
const completion = require('../domain/completion')

var completionRepository = function (){
  var toReturn = {}

  toReturn.all = function(func){
      var allCompletions = db.get('completioncollection')
      allCompletions.find({},{}, func)
    }
  toReturn.add = function(completion, func){
    var allCompletions = db.get('completioncollection')
    allCompletions.insert(completion)
    func()
    }
  toReturn.get = function(completionId, func){
    var allCompletions = db.get('completioncollection')
    allCompletions.find({_id:completionId},{}, func)
  }
  toReturn.edit = function(completion, func){
    var allCompletions = db.get('completioncollection')
    var toUpdate = {}
    for(var i in completion){
      if(i === '_id'){
        continue
      }
      toUpdate[i] = completion[i]
    }
    var theUpdate = {$set:toUpdate}
    console.log(theUpdate)
    var theId = monk.id(completion._id)
    allCompletions.update({"uwi":completion.uwi}, theUpdate, (x) => {
    // allCompletions.findOneAndUpdate({"_id":monk.id(completion._id)}, theUpdate).then((x) => {
      func()
    })
  }
  toReturn.delete = function(id, func){
      var allCompletions = db.get('completioncollection')
      allCompletions.remove({"_id":id}, func)
  }

  return toReturn
}

module.exports = completionRepository()
