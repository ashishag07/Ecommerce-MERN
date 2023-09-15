const route = require('express').Router()

route.get('/product', (req,res)=>{

    res.status(200).send("Welcome to the product!")
})

module.exports = route;