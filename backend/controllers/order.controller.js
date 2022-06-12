const orders=require('../models/orders.model')
const express=require('express')
const router=express.Router()

router.post('/create',async(req,res)=>{
    try{
        let order=await orders.create(req.body)
        return   res.status(200).send(order);

    } catch(err){
        return res.status(500).send({message:err.message})
     }
})


router.get('/:userid',async(req,res)=>{
    try{
        // let order=await orders.find({userid:{$eq:req.params.userid}}).count();
         orders.aggregate([ {
            $match:
            {
              userid:req.params.id
            }
         },
         {$group:{ _id:null, total: {
             $sum: { $multiply: [ "$productid.price", 2 ] } 
         }}}
         ],
         function(err, result) {
            if (err) {
              res.send(err);
            } else {
              res.json(result);
            }
          })
        // return   res.status(200).send("order",order);
    }catch(err){
        return res.status(500).send({message:err.message})
     }
})

module.exports=router