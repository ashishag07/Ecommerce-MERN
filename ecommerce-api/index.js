const express = require('express');
const app = express();
app.use(express.json());

const userRoute = require('./routes/UserRoute');
const productRoute = require('./routes/ProductRoute');
const orderRoute = require('./routes/OrderRoute');
const cartRoute = require('./routes/CartRoute');
const authRoute = require('./routes/AuthRoute');
const stripeRoute = require('./routes/StripeRoute')

const dotevn = require('dotenv');
dotevn.config();

const mongoose = require('mongoose');
mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log('Connected Successfully with DB'))
    .catch(err=>console.log(err));

app.get('/',(req,res) => {
    res.send('I am the home route')
})


app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
app.use('/api/products',productRoute);
app.use('/api/orders',orderRoute);
app.use('/api/cart',cartRoute);
app.use('/api/checkout',stripeRoute);




app.listen(process.env.PORT || 5000,(req,res)=>{
    console.log('The server is up and running');
})