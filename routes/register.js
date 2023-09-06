const express = require('express')
const router = express.Router()
const model = require('../controller/register')

router.post('/create' , model.add)
router.get('/all' , model.getAll)
router.get('/:id' , model.getId)
router.put('/:id' , model.modelPut)
router.delete('/:id' , model.modelDelete)
router.get('/filter', model.getQuery)



module.exports = router