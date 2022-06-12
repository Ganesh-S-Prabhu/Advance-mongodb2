import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"



export const Usercreate=()=>{
const navigate=useNavigate();
const [login,setlogin]=useState(false)
    const [userdata,setuserdata]=useState({
        name:"",
        email:"",
        password:"",
         })
        

         const [address,setaddress]=useState({
            home_no:0,
            city:'',
            state:'',
            pincode:0,
            type:''
         })
    async function handlelogin(){
        if( userdata.email==""||userdata.password==""){
            alert("Please enter all the details")
            return
          }
          let res=await fetch('http://localhost:9000/user/login',{
            method:'POST',
            headers:{
             "content-type": "application/json",
            },
            body:JSON.stringify(userdata),
            
        })
        let data=await res.json()
        if(!data.message){
            navigate(`/user/${data._id}`)
        }else{
            alert(data.message)
        }
    }


   async function handlesubmit(){
    // console.log(userdata)
    // e.preventDefault();
    if(userdata.name=="" || userdata.email==""||userdata.password==""){
      return
    }
    
    userdata.address=address
    

       let res=await fetch('http://localhost:9000/user/create',{
           method:'POST',
           headers:{
            "content-type": "application/json",
           },
           body:JSON.stringify(userdata),
           
       })
       let data=await res.json()
       console.log(data)
       if(!data.message){
        navigate(`/user/${data._id}`)
    }
    //    navigate(`/user/${data._id}`)
    }

   const handlechange=(e)=>{
      
     const {name,value}=e.target;
     setuserdata({
         ...userdata,
         [name]:value
     })
    }

    const handleaddress=(e)=>{
        const {name,value}=e.target;
        setaddress({
            ...address,
            [name]:value
        })
    }


    return(
        <div>
            {!login?<div>
                <form action="">
                <input type="email" placeholder="email" onChange={handlechange} name="email" />
                  <br />
                  <input type="text" placeholder="password" onChange={handlechange} name="password" />
                  <br />
                 
                </form>
                <button onClick={handlelogin}>Submit</button>
                <h3 onClick={()=>
                    setlogin(true)
}>New User?Register</h3>
            </div>:
            
         ( <div>
         <div>
              <form action="">
                  <input type="text" placeholder="name" onChange={handlechange} name="name"/>
                  <br />
                  <input type="email" placeholder="email" onChange={handlechange} name="email" />
                  <br />
                  <input type="text" placeholder="password" onChange={handlechange} name="password" />
                  <br />
                 
              </form>
            </div>  
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
              <button onClick={handlesubmit}>Submit</button>
              </div>)
}
        </div>
    )
}


/*
  houseno:0,
            city:'',
            state:'',
            pincode:0,
            type:''
*/