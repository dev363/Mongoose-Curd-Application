var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {type: String, required: true, unique:true, max: 100},
    price: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);