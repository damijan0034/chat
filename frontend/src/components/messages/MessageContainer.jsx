import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer = () => {
  return (
    <div className='flex flex-col md:min-w-[450px'>
      {/* Header */}
      <div className="bg-slate-500 mb-2 px-4 py-2">
        <span className="label-text">To:</span>
        <span className="font-bold text-gray-900">
            John Doe
        </span>
      </div>
        {/* Messages */}
        <Messages />
        <MessageInput />
    </div>
  )
}

export default MessageContainer
 