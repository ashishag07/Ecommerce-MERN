const route = require('express').Router()
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('../middleware/verifyToken');
const ProductModel = require('../models/ProductModel');
const Product = require('../models/ProductModel');

// Create Product ---- Admin only
route.post('/', verifyTokenAndAdmin, async (req,res)=>{
    const product = new Product(req.body);
    
    try{
        const newProduct = await product.save();        
        res.status(200).json(newProduct);
    }  
    catch(err){
        res.status(500).json(err);
    }
});

// update product ---- Admin only
route.put('/:productId', verifyTokenAndAdmin, async (req,res)=>{
    
    try{
        const updateProduct = await ProductModel.findByIdAndUpdate(req.params.productId,{$set: req.body},{new:true})

        if (!updateProduct) res.status(401).json('no such product');
        else res.status(200).json({'status':"product updated",updateProduct});

    }catch(err){
        res.status(401).json(err);
    }
});

// DELETE product ---- Admin only
route.delete('/:productId',verifyTokenAndAdmin, async (req,res)=>{
    const product = await ProductModel.findByIdAndDelete(req.params.productId);
    try{
        if (!product) res.status(401).json('No such product');
        else{
            res.status(200).json('product deleted successfully.....')
        }
    }
    catch(err){
        res.status(500).json(err);
    }
})


// GET product ---- Anyone (guest, user, admin)
route.get('/find/:productId', async (req,res)=>{
    const product = await ProductModel.findById(req.params.productId);

    try{
        if(!product) res.status(401).json('product not found');
        else {
            res.status(200).json(product)
        }        

    }
    catch(err){
        res.status(500).json(err)
    }
});

// GET All product ---- Anyone (guest, user, admin)
route.get('/find', async (req,res)=>{

    const qNew = req.query.new;
    const qCategory = req.query.category;

    let products;

    if (qNew){
        products = await ProductModel.find().sort({_id: -1}).limit(1)
    }
    else if(qCategory){
        products = await ProductModel.find({
            category : {
                $in: [qCategory],
            }
        });
    }
    else {
        products = await ProductModel.find();
    }  
        

    try{
        if(!products) res.status(401).json('no product found');
        else {
            res.status(200).json(products)
        }        

    }
    catch(err){
        res.status(500).json(err)
    }
});


module.exports = route;