"use client"

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

const Register = () => {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");


  const handleSubmit=async (e)=>{
     e.preventDefault(); //now if i click on submit the page doesnt reload

     if(!name || !email || !password){
      setError("All fields are necessary!")
      return;
     }
     try{
      const res=await fetch('api/register',{
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify({name,
          email,
          password,
        }),
      });

      if(res.ok){
        const form=e.target;
        form.reset();
      }
      else{
        console.log("user registration failed! :(")
      }
     } catch(error){
      console.log("Error during registration: ",error);
     }
  }
  // console.log("Name: ",name)
  return (
    <div className='text-white py-14 container mx-auto grid place-items-center '>
        <h1 className='text-center font-bold text-3xl'>Register to be a part of the community</h1>
        <div className='p-9 m-9 rounded-lg border-t-4 border-teal-600 bg-orange-200 backdrop-blur-3xl'>

        <h1 className='text-xl font-bold my-4 text-center text-black'>Register</h1>

        <form onSubmit={handleSubmit} action="" className='flex flex-col gap-5 text-white'>
        <input onChange={e=>setName(e.target.value)} type="text" placeholder='Full Name' className='p-3 rounded-lg bg-gray-700 border-white hover:border' />
          <input onChange={e=>setEmail(e.target.value)} type="text" placeholder='Email' className='p-3 rounded-lg bg-gray-700 border-white hover:border' />
          <input onChange={e=>setPassword(e.target.value)} type="password" placeholder='Password' className='p-3 rounded-lg text-black' />
          <button className='bg-teal-700 font-bold cursor-pointer px-6 py-2'>Register</button>
          { error && (

            <div className="bg-red-400 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
          )}

          <Link href={'/login'} className='text-sm mt-3 text-right'>Already have an account? <span className='underline'>Login</span></Link>
        </form>
        </div>
    </div>
  )
}

export default Register