import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
const App = () => {
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={< UserLayout/>}>
    {/* user Layout */}
  </Route>
  <Route>
    {/* admin Layout */}
  </Route>

 </Routes>
 
 
 </BrowserRouter>
  ) 
};

export default App