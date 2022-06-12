const express=require('express');


const router=express.Router();
const users=require('../models/user.model')

router.post("/login",async(req,res)=>{
    try {
        const user= await users.findOne({$and:[{email:{$eq:req.body.email}},{password:{$eq:req.body.password}}]})
       
        if(user){
             
                return   res.status(200).send(user);
              
        }
        return res.status(200).send({message:"Email Not Registered"})

      
    } 
    catch(err){
        return res.status(500).send({message:err.message})
     }
})

router.post('/create',async(req,res)=>{
    try{
   const exist=await users.findOne({email:req.body.email}).lean().exec();
   if(exist){
    return res.status(500).send({message:"Email already exist"})
   }
   const user=await users.create(req.body);
   return res.status(200).send(user)

    }catch(err){
       return res.status(500).send({message:err.message})
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const user=await users.findById(req.params.id).lean().exec();
        if(user){
            return res.status(200).send(user)
        }
        return res.status(500).send({message:"User not exist"})

    }catch(err){
        return res.status(500).send({message:err.message})
        }
})

router.patch('/:id/edit',async(req,res)=>{
    try{
        const user=await users.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(user){
            return res.status(200).send(user)
        }
        return res.status(500).send({message:"User not exist"})

    }catch(err){
        return res.status(500).send({message:err.message})
        }
})


router.get('/:id/addresses',async(req,res)=>{
    try{
        const addres=await users.findById(req.params.id).lean().exec();
        if(addres){
            return res.status(200).send(addres.address)
        }
        return res.status(500).send({message:"User not exist"})
    }catch(err){
        return res.status(500).send({message:err.message})
        }
})


//{$push: {friends: {firstName: "Harry", lastName: "Potter"}}

router.patch('/:id/addresses/create',async(req,res)=>{
    try{
        //
        const newaddrress=await users.updateOne({ _id: req.params.id },{ $push: { address: req.body } });
        if(newaddrress.acknowledged){
            const user= await users.findById(req.params.id).lean().exec();
            return res.status(200).send(user)
        }
       
        return res.status(500).send({message:"Something is wrong"})

    }catch(err){
        return res.status(500).send({message:err.message})
        }
})

router.get("/:id/addresses",async(req,res)=>{
    try {
        const user = await users.findById(req.params.id);

        const addresses = user.address;
    
        return res.status(201).send(addresses);
    } 
    catch(err){
        return res.status(500).send({message:err.message})
        }
})

router.patch("/:id/addresses/:idx/edit",async(req,res)=>{
    try {
       
        const update = await users.updateOne({ _id: req.params.id, "address._id": req.params.idx },{ $set: { "address.$": req.body } });
        if (update.acknowledged ) {
            const user = await users.findById(req.params.id).lean().exec();
            return res.status(201).send(user);
          }
          return res.status(500).send({message:"Something is wrong"})
         


    } 
    catch(err){
        return res.status(500).send({message:err.message})
        }
})



module.exports=router


