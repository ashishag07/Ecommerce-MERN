const route = require('express').Router()

route.get('/mycart', (req,res)=>{

    res.status(200).send("Welcome to my cart page!")
})



module.exports = route;