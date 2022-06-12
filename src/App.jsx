import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import {Usercreate} from './components/usercreate'
import { Profile } from './components/profile'
import { Editprofile } from './components/editprofile'
import { Home } from './components/home'
import { Addaddress } from './components/addaddress'
import { Navbar } from './components/navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      <Route path="/user/create" element={<Usercreate />}></Route>
      <Route path="/user/:id" element={<Profile />}></Route>
      <Route path="/user/:id/edit" element={<Editprofile/>}></Route>
      <Route path="/user/:id/addresses/create" element={<Addaddress/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
