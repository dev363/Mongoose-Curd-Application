var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PromoCodeSchema = new Schema({
    name: {type: String, required: true, unique:true, max: 100},
    discount: {type: Number, required: true},
    minOrder: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('PromoCode', PromoCodeSchema);