const mongoose=require('mongoose');





const userschema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    address:[
        {
          home_no: { type: Number, required: true },
          line_1:{ type: String, required: true },
          city: { type: String, required: true },
          state: { type: String, required: true },
          pincode:{type:Number,required:true},
          type: { type: String, required: true, default: "home" },
        },
      ],
},{
    timestamps:true,
    versionKey:false
})


const users=mongoose.model('users',userschema);

module.exports=users

