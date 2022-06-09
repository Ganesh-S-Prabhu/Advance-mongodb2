const express=require('express');

const router=express.Router();
const categorys=require('../models/cetegory.model')


router.post('',async(req,res)=>{
    try{
        const category=await categorys.create(req.body);
        return res.status(200).send(category)

    }catch(err){
        return res.status(500).send({message:err.message})
        }
})

router.get('',async(req,res)=>{
    try{

        const category=await categorys.find().populate("parentid").lean().exec();
        return res.status(200).send(category)
    }
    catch(err){
        return res.status(500).send({message:err.message})
        }
})


router.patch('/:id',async(req,res)=>{
    try{
        const category=await categorys.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(200).send(category)
    }
    catch(err){
        return res.status(500).send({message:err.message})
        }
})

router.get('/:id',async(req,res)=>{
    try{
        const category=await categorys.findById(req.params.id).populate({path:"parentid",populate:{path:"parentid"}}).lean().exec()
        return res.status(200).send(category)
    }
    catch(err){
        return res.status(500).send({message:err.message})
        }
})





module.exports=router

