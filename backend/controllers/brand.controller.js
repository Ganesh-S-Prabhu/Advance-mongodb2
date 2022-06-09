const express=require('express')
const router=express.Router();
const Brand=require('../models/brand.model')






router.get("",async(req,res)=>{
    try {
           let brands=await Brand.find().populate("productid").lean().exec()

          return res.status(200).send(brands)
    } 
    catch(err){
        return res.status(500).send({message:err.message})
        }
})


router.post("/create",async(req,res)=>{
    try {
        let brand=await Brand.create(req.body).lean().exec()
     return   res.status(201).send(brand)
    } 
    catch(err){
        return res.status(500).send({message:err.message})
        }
})

router.get("/:id",async(req,res)=>{
    try {
        const brand = await Brand.findById(req.params.id).populate("productid").lean().exec();

        if (!brand) {
            return res.status(500).send({message:"Brand not exist"})
        }
        return res.status(200).send(brand);
    } 
    catch(err){
        return res.status(500).send({message:err.message})
        }
})


router.patch("/:id/edit",async(req,res)=>{
    try {
        let brand=await Brand.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send(brand);
    } 
    catch(err){
        return res.status(500).send({message:err.message})
        }
})


module.exports=router