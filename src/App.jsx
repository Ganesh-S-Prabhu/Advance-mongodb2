import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import {Usercreate} from './components/usercreate'
import { Profile } from './components/profile'
import { Editprofile } from './components/editprofile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
      <Route path="/user/create" element={<Usercreate />}></Route>
      <Route path="/user/:id" element={<Profile />}></Route>
      <Route path="/user/:id/edit" element={<Editprofile/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
