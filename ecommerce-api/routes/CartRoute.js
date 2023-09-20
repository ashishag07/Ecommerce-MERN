const route = require('express').Router()
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('../middleware/verifyToken');
const CartModel = require('../models/CartModel');
const Cart = require('../models/CartModel');

// Create Cart ---- any
route.post('/',verifyToken, async (req,res)=>{
    const cart = new Cart(req.body);
    
    try{
        const newCart = await cart.save();        
        res.status(200).json(newCart);
    }  
    catch(err){
        res.status(500).json(err);
    }
});

// update Cart ---- User, Admin only
route.put('/:cartId', verifyTokenAndAuthorization, async (req,res)=>{
    
    try{
        const updateCart = await CartModel.findByIdAndUpdate(req.params.cartId,{$set: req.body},{new:true})

        if (!updateCart) res.status(401).json('no such Cart');
        else res.status(200).json({'status':"Cart updated",updateCart});

    }catch(err){
        res.status(401).json(err);
    }
});

// DELETE Cart ---- User, Admin only
route.delete('/:cartId',verifyTokenAndAuthorization, async (req,res)=>{
    const cart = await CartModel.findByIdAndDelete(req.params.cartId);
    try{
        if (!cart) res.status(401).json('No such Cart');
        else{
            res.status(200).json('Cart deleted successfully.....')
        }
    }
    catch(err){
        res.status(500).json(err);
    }
})


// GET User Cart ---- (user, admin)
route.get('/find/:userId',verifyTokenAndAuthorization, async (req,res)=>{
    const cart = await CartModel.findOne({userId: req.params.userId})

    try{
        if(!cart) res.status(401).json('Cart not found');
        else {
            res.status(200).json(cart)
        }        

    }
    catch(err){
        res.status(500).json(err)
    }
});

// GET All Carts --- Admin only
route.get('/find', verifyTokenAndAdmin, async (req,res)=>{

    const carts = await CartModel.find();
    
    try{
        if(!carts) res.status(401).json('no cart found');
        else {
            res.status(200).json(carts)
        }        

    }
    catch(err){
        res.status(500).json(err)
    }
});


module.exports = route;