import { useState } from "react";


  export  const Addaddress=()=>{

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
            </div>
        )
    }