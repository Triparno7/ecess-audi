import React from 'react'

const UserInfo = () => {
  return (
    <div className='grid place-items-center h-screen'>
        <div className="shadow-lg p-8 bg-green-400 text-black flex flex-col gap-2 my-6">
            <div>
                Name: <span className='font-bold'>John</span>
            </div>
            <div>
                Email: <span className='font-bold'>john@gmail.com</span>
            </div>
            <button className='bg-red-500 text-white font-bold px-6 py-2 mt-3'>Log Out</button>
        </div>
    </div>
  )
}

export default UserInfo