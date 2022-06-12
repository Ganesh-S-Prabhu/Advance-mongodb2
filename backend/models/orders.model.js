const mongoose=require("mongoose")

const orderSchema=new mongoose.Schema({
   
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
      },
    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
      },
      qty:{type:Number,required:true,default:1}
         
       
},{
    timestamps:true,
    versionKey:false
})

const order=mongoose.model("order",orderSchema)

module.exports=order