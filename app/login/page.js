import React from 'react'
import Link from 'next/link'
const Login = () => {
  return (
    <div className='text-white py-14 container mx-auto grid place-items-center w-screen'>
        <h1 className='text-center font-bold text-3xl'>Login to be a part of the community</h1>
        <div className='p-9 m-9 rounded-lg border-t-4 border-teal-600 bg-orange-200 backdrop-blur-3xl'>

        <h1 className='text-xl font-bold my-4 text-center text-black'>Enter your details</h1>

        <form action="" className='flex flex-col gap-5 text-white'>
          <input type="text" placeholder='Email' className='p-3 rounded-lg bg-gray-700 border-white hover:border' />
          <input type="password" placeholder='Password' className='p-3 rounded-lg text-black' />
          <button className='bg-teal-700 font-bold cursor-pointer px-6 py-2'>Login</button>
          <div className="bg-red-400 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">Error message</div>

          <Link href={'/register'} className='text-sm mt-3 text-right text-black'>Don't have an account? <span className='underline'>Register</span></Link>
        </form>
        </div>
    </div>
  )
}

export default Login