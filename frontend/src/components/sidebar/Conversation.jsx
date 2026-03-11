import React from 'react'

const Conversation = () => {
  return (
    <>
    <div className='flex items-center gap-2 hover:bg-sky-500 p-2 py-1 rounded cursor-pointer'>
      <div className="avatar online">
        <div className="rounded-full w-12">
          <img className='' src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww" alt='avatar' />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className='flex justify-between gap-3'>
          <p className='font-bold text-gray-200'>John Doe</p>
          <span className='text-xl'>🔥</span>
        </div>
      </div>
    </div>

    <div className="my-0 py-0 h-1 divider" />

    
    </>
  )
}

export default Conversation
