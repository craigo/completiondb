'use strict'

module.exports = function(id, uwi, licenseNo, province){
  var completion = {}

  completion.id = id
  completion.uwi = uwi
  completion.licenseNo = licenseNo
  completion.province = province

  return completion
}
