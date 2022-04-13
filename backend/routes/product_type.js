const express = require('express')
const { create ,list} = require('../controller/product_type')

const router = express.Router()


//  localhost:8000/api/test

router.post('/product_type',create)
router.get('/product_type',list)

router.post('/create',(req,res)=>{
  res.send('hellow test')
})

module.exports = router