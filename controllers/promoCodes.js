var PromoCode = require('../models/PromoCodes');



// Get All PromoCodes

exports.getPromoCodes = function (req, res) {
    PromoCode.find({}, function (err, promos) {
        if (err) {
            res.status(400).json({message:'PromoCodes not found',error:err})
            return next(err);
        }
        return res.json({message:' All PromoCodes data',data:promos})
    })
};


// Create PromoCode

exports.promoCode_create = function (req, res,next) {

    var pmCode = new PromoCode(
        {
            name: req.body.name,
            discount: req.body.discount,
            minOrder: req.body.minOrder,
        }
    );

    pmCode.save(function (err) {
        if (err) {
            res.status(400).json({message:'PromoCode not created',error:err})
            return next(err);
        }
        return res.json({message:'PromoCode Created successfully',data:pmCode})
    })
};


// Get PromoCode details by Id

exports.promoCode_details = function (req, res,next) {
    PromoCode.findById(req.params.id, function (err, PromoCode) {
        if (err) {
            res.status(400).json({message:'PromoCode not found',error:err})
            return next(err);
        }
        return res.json({message:'PromoCode details',data:PromoCode})
    })
};


// Update PromoCode details 
exports.promoCode_update = function (req, res,next) {
    PromoCode.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, PromoCode) {
        if (err) {
            res.status(400).json({message:'PromoCode not update',error:err})
            return next(err);
        }
        return res.json({message:'PromoCode Updated successfully',data:PromoCode})
    });
};


// Delete PromoCode data

exports.promoCode_delete = function (req, res,next) {
    PromoCode.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(400).json({message:'PromoCode not deletd',error:err})
            return next(err);
        }
        return res.json({message:'PromoCode deleted successfully',data:{id:req.params.id}})
    })
};