import { useNavigate } from "react-router-dom"


export const Navbar=()=>{
    const navigate=useNavigate();
    return(
        <div id="navbar">
             <div>
                 <h2 onClick={()=>navigate("/")}>Home</h2>
        <button
        onClick={()=>{
            navigate('/user/create')
        }}>Login </button>
        </div>
        </div>
    )
}