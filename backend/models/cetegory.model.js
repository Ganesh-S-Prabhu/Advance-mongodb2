const mongoose=require('mongoose');





const categoryschema=new mongoose.Schema({
    category_name:{type:String,required:true},
    parentid: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
        ref: 'categories'
      },
      ancestors: [{
           _id: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "categories"
           },
       
      }]
    
},{
    timestamps:true,
    versionKey:false
})


const categorys=mongoose.model('categories',categoryschema);

module.exports=categorys

