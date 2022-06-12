const express=require('express')
const router=express.Router();
const Product=require('../models/product.model')


router.get("/",async(req,res)=>{
    try {
        const products = await Product.find().populate("cetegoryid").lean().exec();

           res.status(200).send(products)
    } 
    catch(err){
        return res.status(500).send({message:err.message})
        }
})


router.post("/create",async(req,res)=>{
    try {
           let product=await Product.create(req.body)

           return res.status(201).send(product);
    } 
    catch(err){
        return res.status(500).send({message:err.message})
        }
})

router.get("/:id",async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id).lean().exec();

        if (!product) {
            return res.status(500).send({message:"Product not exist"})
        }
        return res.status(200).send(product);
    } 
    catch(err){
        return res.status(500).send({message:err.message})
        }
})


router.patch("/:id/edit",async(req,res)=>{
    try {
           let product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
           return res.status(201).send(product);
          
    } 
    catch(err){
        return res.status(500).send({message:err.message})
        }
})

module.exports=router