const route = require('express').Router()

route.get('/myOrder', (req,res)=>{

    res.status(200).send("My order page!")
})

module.exports = route;