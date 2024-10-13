const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: { type:String, required:true},
    quantity: {type:Number, required:true},
    price: {type:Number, required:true},
    description: {type:String, required:true},
  },
  { 
    timestamps: true, 
    collection:'products'
  }
);

module.exports=mongoose.model('Product',productSchema)