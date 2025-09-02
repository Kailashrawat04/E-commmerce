import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import { Toaster } from "sonner";
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CollectionPage from './pages/CollectionPage'
const App = () => {
  return (
  <BrowserRouter>
  <Toaster position ='top-center' />
  <Routes>
   <Route path='/' element={< UserLayout/>}>
     {/* user Layout */}
     <Route index element={<Home/>}/>
     <Route path="Login" element={<Login/>}/>
     <Route path="Register" element={<Register/>}/>
     <Route path='Profile' element={<Profile/>}/>
     <Route path='Collection/:collection' element={<CollectionPage/>}/>
   </Route>
   <Route>
     {/* admin Layout */}
   </Route>

  </Routes>
  
  
  </BrowserRouter>
  ) 
};

export default App