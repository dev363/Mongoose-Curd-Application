var Product = require('../models/product');


// Get All Products

exports.getProducts = function (req, res) {
    Product.find({}, function (err, product) {
        if (err) {
            res.status(400).json({message:'Products not found',error:err})
            return next(err);
        }
        return res.json({message:' All Products data',data:product})
    })
};


// Create Product

exports.product_create = function (req, res,next) {

    var product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            res.status(400).json({message:'Product not created',error:err})
            return next(err);
        }
        return res.json({message:'Product Created successfully',data:product})
    })
};


// Get product details by Id

exports.product_details = function (req, res,next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) {
            res.status(400).json({message:'Product not found',error:err})
            return next(err);
        }
        return res.json({message:'Product details',data:product})
    })
};


// Update Product details 
exports.product_update = function (req, res,next) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) {
            res.status(400).json({message:'Product not update',error:err})
            return next(err);
        }
        return res.json({message:'Product Updated successfully',data:product})
    });
};


// Delete Product data

exports.product_delete = function (req, res,next) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(400).json({message:'Product not deletd',error:err})
            return next(err);
        }
        return res.json({message:'Product deleted successfully',data:{id:req.params.id}})
    })
};