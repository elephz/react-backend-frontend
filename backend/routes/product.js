const express = require('express')
const { create,update,read,list,remove ,productInShop} = require('../controller/product')

const router = express.Router()


//  localhost:8000/api/test

router.post('/product',create)
router.get('/product/:id',read)
router.get('/product',list)
router.put('/product/:id',update)
router.delete('/product/:id',remove)
router.get('/productInShop/:id',productInShop)

module.exports = router