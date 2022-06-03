const mongoose = require('mongoose');

const homepageSchema = new mongoose.Schema({
    id: {type:Number , required: true,unique:true},
    title: {type:String , required: true},
    category :{type:String, required: false},
    original_price: {type:String , required: true},
    discounted_price: {type:String , required: true},
    sizes :{type:String, required: false},
    images: [{type:String, required: true}],
    details: {type:String, required: false},
    rating: {type:String, required: true},
    seller_id:{type:String, required: false},
})

module.exports = mongoose.model("homepage_products",homepageSchema);