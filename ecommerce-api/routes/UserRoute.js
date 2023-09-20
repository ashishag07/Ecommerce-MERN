const route = require('express').Router()
const CryptoJS = require('crypto-js')
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('../middleware/verifyToken');
const UserModel = require('../models/UserModel');

// update a user
route.put('/:userId', verifyTokenAndAuthorization, async (req,res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SEC_PASS
        ).toString();
    }

    try{
        const updateUser = await UserModel.findByIdAndUpdate(req.params.userId,{$set: req.body},{new:true})

        if (!updateUser) res.status(401).json('no such user');
        else res.status(200).json({'status':"user updated",updateUser});

    }catch(err){
        res.status(401).json(err);
    }
});

// DELETE user
route.delete('/:userId',verifyTokenAndAuthorization, async (req,res)=>{
    const user = await UserModel.findByIdAndDelete(req.params.userId);
    try{
        if (!user) res.status(401).json('No such user');
        else{
            res.status(200).json('user deleted successfully.....')
        }
    }
    catch(err){
        res.status(500).json(err);
    }
})

// GET user
route.get('/find/:userId', verifyTokenAndAdmin, async (req,res)=>{
    const user = await UserModel.findById(req.params.userId);

    try{
        if(!user) res.status(401).json('user not found');
        else {
            const {password, ...others} = user._doc;
            res.status(200).json(others)
        }        

    }
    catch(err){
        res.status(500).json(err)
    }
});

// GET All user
route.get('/find', verifyTokenAndAdmin, async (req,res)=>{

    const query = req.query.new;

    const users = query ? 
        await UserModel.find().sort({_id: -1}).limit(1) : 
        await UserModel.find();

    try{
        if(!users) res.status(401).json('no user found');
        else {
            res.status(200).json(users)
        }        

    }
    catch(err){
        res.status(500).json(err)
    }
});

// Get stats
route.get('/stats',verifyTokenAndAdmin, async (req,res)=>{
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    
    try{
        const data = await UserModel.aggregate([
            {$match: {createdAt: {$gte: lastYear}}},
            {
                $project: {
                    month: {$month: "$createdAt"}
                }
            },
            {
                $group:{
                _id:"$month",
                total:{$sum: 1}
                }
            }

        ])

        res.status(200).json(data);

    }
    catch(err){
        res.status(500).json(err)
    }
})



module.exports = route;