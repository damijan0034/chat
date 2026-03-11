import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className="chat-image avatar">
        <div className="rounded-full w-10">
            <img className='' src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww" alt='avatar' />
        </div>
      </div>

      <div className={`chat-bubble bg-sky-500 text-white`}>
        How are you?
      </div>
      <div className="items-center gap-1 opacity-50 text-white text-xs chat-footer">
        10:00 AM</div>
    </div>
  )
} 

export default Message
