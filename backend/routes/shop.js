const express = require('express')

const { create,read,list,update,remove } = require('../controller/shop')

const router = express.Router()


//  localhost:8000/api/test

router.post('/shop',create)
router.get('/shop/:id',read)
router.get('/shop',list)
router.put('/shop/:id',update)
router.delete('/shop/:id',remove)

module.exports = router