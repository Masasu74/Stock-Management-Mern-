const Product = require('../models/productModel');
const mongoose=require('mongoose');

//get all
const getProducts = async(req,res)=>{
    const products=await Product.find({}).sort({createdAt:-1})
    res.status(200).json(products)
}

// get a single 
const getProduct= async(req,res)=>{
    const{id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Product'})
    }

    const product= await Product.findById(id)
    if(!product){
        return res.status(404).json({error:'No such Product'})
    }
    res.status(200).json(product)
}




//create new 
const createProduct=async (req,res)=>{
    const{name,quantity,price,description}=req.body   

    //add doc to db 
    try{
        const product=await Product.create({name,quantity,price,description})
        res.status(200).json(product)
    } catch(error){
        res.status(400).json({error:error.message})
    }
}

//delete a
const deleteProduct = async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Product'})
    }

    const product = await Product.findOneAndDelete({_id:id})

    if(!product){
        return res.status(404).json({error:'No such Product'})
    }

    res.status(200).json(product)

}

//update a 

const updateProduct=async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such product'})
    }

  const product = await Product.findOneAndUpdate({_id:id},{
    ...req.body
  })  
  
  if(!product){
    return res.status(404).json({error:'No such product'})
}
res.status(200).json(product)


}

module.exports={
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
   
    
}