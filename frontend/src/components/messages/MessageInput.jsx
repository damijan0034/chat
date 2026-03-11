import {BsSend} from 'react-icons/bs'

const MessageInput = () => {
  return (
    <form  className="my-3 px-4">
        <div className="relative w-full">
            <input placeholder='Send a message'
             type="text" className="block bg-gray-700 p-2.5 border border border-gray-600 rounded-lg w-full text-white text-sm" />
             <button type='submit' className='absolute inset-y-0 flex items-center pe-3 end-0'>
					   <BsSend />
				</button>
        </div>
    </form>
  )
}

export default MessageInput
