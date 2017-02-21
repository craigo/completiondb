'use strict'

const addCommand = require('../commands/addCompletion')
const allCommand = require('../commands/getAllCompletions')
const getCommand = require('../commands/getCompletion')
const editCommand = require('../commands/editCompletion')
const deleteCommand = require('../commands/deleteCompletion')

const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
  allCommand(function(e,docs){
    var toReturn = {"completions":docs}
    response.render('index', toReturn)
  })
})

router.get('/show/:completionId', (request, response) => {
  getCommand(request.params.completionId, (e,docs)=>{
    console.log(docs)
    var result = docs[0]
    var toReturn = {
      uwi: result.uwi,
      licenseNo: result.licenseNo,
      province: result.province
    }

    response.render('show', toReturn)
  })
})

router.get('/new', (request,response) => {
  response.render('new')
})

router.post('/create', (request, response) => {
  var toAdd = {"uwi": request.body.uwi,
    "licenseNo": request.body.licenseNo,
    "province": request.body.province
  }

  addCommand(toAdd, (x) => {
    response.redirect("/")
  })
})

router.post('/edit', (req, resp) => {
  var toEdit = {"_id": req.body._id,
                "uwi": req.body.uwi,
                "licenseNo": req.body.licenseNo,
                "province": req.body.province}

  editCommand(toEdit, (x) => {
    resp.redirect("/")
  })
})

router.get('/delete/:deleteId', (req, resp) => {
  var toDelete = req.params.deleteId
  deleteCommand(toDelete, (x) => {
    resp.redirect("/")
  })
})

module.exports = router
