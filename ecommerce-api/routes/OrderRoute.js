const route = require('express').Router()
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('../middleware/verifyToken');
const OrderModel = require('../models/OrderModel');
const Order = require('../models/OrderModel');

// Create Order ---- any
route.post('/', async (req,res)=>{
    const order = new Order(req.body);
    
    try{
        const newOrder = await order.save();        
        res.status(200).json(newOrder);
    }  
    catch(err){
        res.status(500).json(err);
    }
});

// update Order ---- User, Admin only
route.put('/:orderId', verifyTokenAndAdmin, async (req,res)=>{
    
    try{
        const updateOrder = await OrderModel.findByIdAndUpdate(req.params.orderId,{$set: req.body},{new:true})

        if (!updateOrder) res.status(401).json('no such Order');
        else res.status(200).json({'status':"Order updated",updateOrder});

    }catch(err){
        res.status(401).json(err);
    }
});

// DELETE Order ---- User, Admin only
route.delete('/:orderId',verifyTokenAndAdmin, async (req,res)=>{
    const order = await OrderModel.findByIdAndDelete(req.params.orderId);
    try{
        if (!order) res.status(401).json('No such Order');
        else{
            res.status(200).json('Order deleted successfully.....')
        }
    }
    catch(err){
        res.status(500).json(err);
    }
})


// GET User Order ---- (user, admin)
route.get('/find/:userId', verifyTokenAndAuthorization, async (req,res)=>{
    const order = await OrderModel.findOne({userId: req.params.userId})

    try{
        if(!order) res.status(401).json('Order not found');
        else {
            res.status(200).json(order)
        }        

    }
    catch(err){
        res.status(500).json(err)
    }
});

// GET All Orders --- Admin only
route.get('/find', verifyTokenAndAdmin, async (req,res)=>{

    const orders = await OrderModel.find();
    
    try{
        if(!orders) res.status(401).json('no order found');
        else {
            res.status(200).json(orders)
        }        

    }
    catch(err){
        res.status(500).json(err)
    }
});

// GET Monthly income 
route.get('/income', verifyTokenAndAdmin, async (req,res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1));

    try{
        const income = await OrderModel.aggregate([
            {$match: {createdAt: {$gte: previousMonth}}},
            {
                $project: {
                    month: {$month: "$createdAt"},
                    sales: "$amount"
                },                
            },
            {
                $group:{
                    _id: "$month",
                    total: {$sum: "$sales"}
                }
            }
        ])

        res.status(200).json(income);

    }
    catch(err){
        res.status(500).json(err)
    }

    
})

module.exports = route;