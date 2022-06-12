import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";


  export  const Addaddress=()=>{
let {id}=useParams()
const navigate=useNavigate()
        const [address,setaddress]=useState({
            home_no:0,
            city:'',
            state:'',
            pincode:0,
            type:''
         })

        const handleaddress=(e)=>{
            const {name,value}=e.target;
            setaddress({
                ...address,
                [name]:value
            })
        }

        const submitaddress=async()=>{
              if(address.city==""||address.home_no==0||address.pincode==0||address.state==""||address.type==""){
                    alert("please Fill all the fields")
                    return
              }
              let res=await fetch(`http://localhost:9000/user/${id}/addresses/create`,{
                  method:"PATCH",
                  headers:{
                    "content-type": "application/json",
                   },
                   body:JSON.stringify(address),
              })
              let data=await res.json()
              console.log(data)
              if(!data.message){
                  alert("Address is added sucessfully")
                navigate(`/user/${data._id}`)
              }
            }

        return(
            <div>
                 <form action="">
                      <input type="Number" placeholder="House Number" onChange={handleaddress} name='home_no' />
                      <br />
                      <input type="text" placeholder="city" onChange={handleaddress} name='city' />
                      <br />
                      <input type="text" placeholder="State" onChange={handleaddress} name='state' />
                      <br />
                      <input type="number" placeholder="pincode"  onChange={handleaddress} name='pincode' />
                      <br />
                      <input type="text" placeholder="Address_type" onChange={handleaddress} name='type' />
                      <br />
                  </form>
                  <button onClick={submitaddress}>Submit</button>
            </div>
        )
    }