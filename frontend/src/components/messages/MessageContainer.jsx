import { TiMessages } from 'react-icons/ti'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer = () => {
  const noChatSelected=true
  return (
    <div className='flex flex-col md:min-w-[450px'>
     
      {noChatSelected ? (<NoChatSelected />) :
      (
      <>
         <div className="bg-slate-500 mb-2 px-4 py-2">
        <span className="label-text">To:</span>
        <span className="font-bold text-gray-900">
            John Doe
        </span>
      </div>
        
        <Messages />
        <MessageInput />
        
        </>
         )
      }
     
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
	
	return (
		<div className='flex justify-center items-center w-full h-full'>
			<div className='flex flex-col items-center gap-2 px-4 font-semibold text-gray-200 sm:text-lg md:text-xl text-center'>
				<p>Welcome 👋  ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-white text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};

 