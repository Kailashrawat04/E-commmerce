import React from 'react'
import { Link } from 'react-router-dom'
import register from '../assets/register.webp'

const Register = () => {
    const[name,setName]=React.useState("");
    const [email ,setEmail]=React.useState("");
    const [password ,setPassword]=React.useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("user registered:",{name,email,password})
    }


  return (
    <div className='flex'>
        <div className='w-1/2 h-screen flex flex-col justify-center items-center bg-gray-100'>
        <form className='bg-white p-8 rounded-lg shadow-md w-3/4'>
        <div className='mb-6 flex justify-center'>
            <h2 className='text-2xl font-bold'>Login</h2>
          </div>
          <h2 className='text-2xl font-bold mb-6 text-center'>Hey there!</h2>
          <p className='text-gray-600 mb-6 text-center'>
            Enter your username and password to Login</p>
            <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
            <input type='text'
            value={name} onChange={(e)=>setName(e.target.value)}
             className='w-full p-2 border rounded' placeholder='Enter your name'/>
            
            </div>
            <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full p-2 border rounded' placeholder='Enter your email'/>
            </div>
            <div className='mb-4'>
            <label className='block text-sm font-semibold m-2 '>Password</label>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full p-2 border rounded' placeholder='Enter your password'/>
            </div>
            <button type='submit' className='w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition'>Sign Up</button>
            <p className='text-sm mt-6 text-center'>Don't have an account? 
                <Link to ="/Login" className='text-blue-500 hover:underline'> Login</Link>
                </p>
        </form>
        </div>
        <div className='w-1/2 hiden md:block bg-gray-800'>
        <div className='h-full flex flex-col items-center justify-center '>
            <img src={register} alt='Login to account' className='w-full h-[750px] object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default Register