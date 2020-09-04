// app.js
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const config= require('./config');
const {mode}= config;
const {port,db} = config[mode];
const {MONGO_USER,MONGO_PASSWORD,MONGO_DB}= db;

require('./db')(MONGO_USER,MONGO_PASSWORD,MONGO_DB)

// Imports routes
var product = require('./routes/product'); 
var promoCode = require('./routes/promoCode'); 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
});


app.get("/",(req,res)=>{
    res.json({message:"Api working fine"})
})
app.use('/products', product);
app.use('/promocode', promoCode);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
