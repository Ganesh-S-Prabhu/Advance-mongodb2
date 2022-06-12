const express =require('express');
const app=express();
const cors=require('cors')
const connectDB=require('./configs/db')
const usercontroller=require('./controllers/user.controller')
const categorycontroller=require('./controllers/category.controller')
const productcontroller=require('./controllers/product.controller')
const brandcontroller=require('./controllers/brand.controller')
const ordercontroller=require('./controllers/order.controller')

app.use(express.json());
app.use(cors());
app.use('/user',usercontroller)
app.use('/product',productcontroller)
app.use('/brand',brandcontroller)
app.use('/category',categorycontroller)
app.use('/order',ordercontroller)



app.listen(9000,()=>{
try{
    connectDB();
    console.log('http://localhost:9000')

}catch(err){
console.log('err')
}

})