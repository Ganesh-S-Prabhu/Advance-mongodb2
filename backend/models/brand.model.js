const mongoose=require("mongoose")

const brandsShema=new mongoose.Schema({
    brandname:{type:String,required:true},
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true},

},{
    timestamps:true,
    versionKey:false
    
})

const Brand=mongoose.model("brand",brandsShema)
module.exports=Brand