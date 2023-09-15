const User = require('../models/UserModel');
const route = require('express').Router();
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');


/*===========================================
Register User
===========================================*/
route.post('/register', async (req,res)=>{
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SEC_PASS
        ).toString()
    })
    try{
        const newUser = await user.save();
        const {password, ...others} = newUser._doc;
        res.status(200).json(others);
    }  
    catch(err){
        res.status(500).json(err);
    }
});



/*===========================================
Login User
===========================================*/
route.post('/login', async (req,res)=>{
    
    try{
        const user = await User.findOne({username:req.body.username});
        if (!user) res.status(401).send('username not found');

        else{
            const decryptPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.SEC_PASS
            )
            
            const originalPassword = decryptPassword.toString(CryptoJS.enc.Utf8);
            if(originalPassword !== req.body.password) res.status(401).send('wrong password');

            else{
                // Generating a access token
                const accessToken = jwt.sign(
                    {
                        id: user._id,
                        isAdmin: user.isAdmin
                    },
                    process.env.JWT_SEC,
                    {expiresIn: '1d'}
                    )
                const {password,...others} = user._doc
                res.status(200).send({...others, accessToken})
            }
        }

    }catch(err){
        res.status(500).send(err);
    }
})

module.exports = route;