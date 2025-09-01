import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import { Toster } from "sonner";
const App = () => {
  return (
 <BrowserRouter>
 <Toster position ='top-center' />
 <Routes>
  <Route path='/' element={< UserLayout/>}>
    {/* user Layout */}
    <Route index element={<Home/>}/>
  </Route>
  <Route>
    {/* admin Layout */}
  </Route>

 </Routes>
 
 
 </BrowserRouter>
  ) 
};

export default App