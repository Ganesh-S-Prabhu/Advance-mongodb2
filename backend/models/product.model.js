const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({

        productname:{type:String,required:true},
        productimg:{type:String,required:true},
        price:{type:Number,required:true},
       
},{
    timestamps:true,
    versionKey:false
})

const Product=mongoose.model("product",productSchema)

module.exports=Product