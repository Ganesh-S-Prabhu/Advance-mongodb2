import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";




 export const Editprofile=()=>{
     const [datas,setdata]=useState({});
     const navidate=useNavigate();
     const [userdata,setuserdata]=useState({
        name:datas.name,
        email:datas.email,
        password:datas.password,
         })
     let {id}=useParams();

    useEffect(()=>{
        getdata();
    },[])


    async function handlesubmit(e){
        // console.log(userdata)
        e.preventDefault();
        if(userdata.name=="" || userdata.email==""||userdata.password==""){
          return
        }
        
       
        
    
           let res=await fetch(`http://localhost:9000/user/${id}/edit`,{
               method:'PATCH',
               headers:{
                "content-type": "application/json",
               },
               body:JSON.stringify(userdata),
               
           })
           let data=await res.json()
           alert("Sucessfully Edited")
           console.log(data)
        }

    const handlechange=(e)=>{
      
        const {name,value}=e.target;
        setuserdata({
            ...userdata,
            [name]:value
        })
       }

    async function getdata(){
let res=await fetch(`http://localhost:9000/user/${id}`)
let data=await res.json();
console.log(data)
setdata(data);
    }
      return(
          <div>
             <form action="">
                  <input type="text" placeholder="name" onChange={handlechange} name="name" defaultValue={datas.name}/>
                  <br />
                  <input type="email" placeholder="email" onChange={handlechange} name="email"defaultValue={datas.email}/>
                  <br />
                  <input type="text" placeholder="password" onChange={handlechange} name="password" defaultValue={datas.password}/>
                  <br />
                  <input type="submit" value="Submit" onClick={handlesubmit} />
                 
              </form>
              <div><button>Add Address</button>
              </div>
          </div>
      )
  }