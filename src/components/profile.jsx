import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export const Profile=()=>{
    let {id}=useParams();

    const navigate=useNavigate();
    const [datas,setdata]=useState({
        address:[]
    });

   useEffect(()=>{
   getdata();
    },[])

const getdata=async()=>{
let res=await fetch(`http://localhost:9000/user/${id}`)
let data=await res.json();
console.log(data)
setdata(data)
}

    return(
        <div>
            <h3>Name:{datas.name}   </h3>
            <h3>Email:{datas.email}  </h3>
            <h3>Address </h3>
            <br />
                {datas.address.map(e=>{
                    return(
                        <div>
                            <span>{e.type}Address</span>
                            <br />
                            <span>{e.home_no},  {e.city},    {e.state}-{e.pincode}         </span>

                           
                            
                        </div>
                    )
                })}
                <button onClick={()=>navigate(`/user/${datas._id}/edit`)}>Edit Profile</button>
           
        </div>
    )
}