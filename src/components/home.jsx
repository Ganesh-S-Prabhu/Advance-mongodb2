import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import './home.css'

export const Home=()=>{
    const [products,setproducts]=useState([])
    const navigate=useNavigate();
    useEffect(()=>{
            getdata();
    },[])

    async function getdata(){
        try{
               let res=await fetch("http://localhost:9000/product")
               let data=await res.json()
               setproducts(data)

        }catch(err){
            console.log(err)
        }
    }
    return(
        <div id="home">
         

            <div id="product">
                {products.map(e=>{
                    return(
                        <div>
                             <img src={e.productimg} alt="" />
                             <p>{e.productname}</p>
                             <p>{e.price}</p>
                        </div>
                       
                        
                    )
                })}
            </div>
        </div>
    )
}