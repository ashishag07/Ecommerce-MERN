const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next)=>{
    const authHeader = req.headers.token;

    if(authHeader){
        token = authHeader;
        jwt.verify(
            token,
            process.env.JWT_SEC,
            (err, user)=>{
                if(err) res.status(403).json("The token is not valid.");
                else{
                    req.user = user;
                    next();
                }
            }
        )
    }else{
        res.status(401).json('You are not authorized')
    }
};

const verifyTokenAndAuthorization = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if (req.user.id === req.params.id || req.user.isAdmin){
            next();
        }
        else{
            res.statu(401).json('you are not allowed to do that');
        }

    })
    
};

const verifyTokenAndAdmin = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if (req.user.isAdmin || req.user.id === req.params.id){
            next();
        }
        else{
            res.status(401).json('you are not allowed to do that');
        }

    })
    
};

module.exports = {
    verifyToken, 
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
}